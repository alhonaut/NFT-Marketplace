// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "./ConverterEthToUsd.sol";

error NftMarketplace__PriceMustBeAboveZero();
error NftMarketplace__NftNotApproved();
error NftMarketplace__NftAlreadyListed(address nftAddress, uint256 tokenId);
error NftMarketplace__NftNotListed(address nftAddress, uint256 tokenId);
error NftMarketplace__SenderNotOwnerOfNft();
error NftMarketplace__NotEnoughFunds(
    address nftAddress,
    uint256 tokenId,
    uint256 price
);
error NftMarketplace__TransactionFailed();
error NftMarketplace__NoFundsToWithdraw();

contract NftMarketplace {
    using ConverterEthToUsd for uint256;

    struct Listing {
        address owner;
        uint256 price;
    }

    event ItemListed(
        address indexed owner,
        address indexed nftAddress,
        uint256 indexed tokenId,
        uint256 timestamp,
        uint256 price
    );

    event ItemBought(
        address indexed newOwner,
        address indexed nftAddress,
        uint256 indexed tokenId,
        uint256 timestamp,
        uint256 price
    );

    event ItemCanceled(
        address indexed owner,
        address indexed nftAddress,
        uint256 indexed tokenId,
        uint256 timestamp
    );

    modifier isNotListed(address nftAddress, uint256 tokenId) {
        Listing memory listing = s_nftList[nftAddress][tokenId];
        if (listing.price > 0) {
            revert NftMarketplace__NftAlreadyListed(nftAddress, tokenId);
        }
        _;
    }

    modifier isListed(address nftAddress, uint256 tokenId) {
        Listing memory listing = s_nftList[nftAddress][tokenId];
        if (listing.price <= 0) {
            revert NftMarketplace__NftNotListed(nftAddress, tokenId);
        }
        _;
    }

    modifier isNftOwner(
        address nftAddress,
        uint256 tokenId,
        address sender
    ) {
        IERC721 nft = IERC721(nftAddress);
        address realOwner = nft.ownerOf(tokenId);

        if (sender != realOwner) {
            revert NftMarketplace__SenderNotOwnerOfNft();
        }
        _;
    }

    // Nft contract address => tokenID => Listing data
    mapping(address => mapping(uint256 => Listing)) private s_nftList;

    // seller address => amount earned
    mapping(address => uint256) private s_amountEarned;

    /*
     * @notice Method for listing NFT
     * @param nftAddress Address of NFT contract
     * @param tokenId Token ID of NFT
     * @param price sale price for each item
     */
    function listItem(
        address nftAddress,
        uint256 tokenId,
        uint256 price
    )
        external
        isNotListed(nftAddress, tokenId)
        isNftOwner(nftAddress, tokenId, msg.sender)
    {
        if (price <= 0) {
            revert NftMarketplace__PriceMustBeAboveZero();
        }

        IERC721 nft = IERC721(nftAddress);
        if (nft.getApproved(tokenId) != address(this)) {
            revert NftMarketplace__NftNotApproved();
        }

        s_nftList[nftAddress][tokenId] = Listing(msg.sender, price);
        emit ItemListed(
            msg.sender,
            nftAddress,
            tokenId,
            block.timestamp,
            price
        );
    }

    function buyItem(
        address nftAddress,
        uint256 tokenId
    ) external payable isListed(nftAddress, tokenId) {
        Listing memory nft = s_nftList[nftAddress][tokenId];
        if (msg.value < nft.price) {
            revert NftMarketplace__NotEnoughFunds(
                nftAddress,
                tokenId,
                nft.price
            );
        }

        s_amountEarned[nft.owner] += msg.value;
        delete (s_nftList[nftAddress][tokenId]);

        IERC721(nftAddress).safeTransferFrom(nft.owner, msg.sender, tokenId);
        emit ItemBought(
            msg.sender,
            nftAddress,
            tokenId,
            block.timestamp,
            nft.price
        );
    }

    function withdrawFunds() external {
        uint256 balance = s_amountEarned[msg.sender];
        s_amountEarned[msg.sender] = 0;

        if (balance <= 0) {
            revert NftMarketplace__NoFundsToWithdraw();
        }

        (bool success, ) = msg.sender.call{value: balance}("");
        if (!success) {
            revert NftMarketplace__TransactionFailed();
        }
    }

    function cancelListing(
        address nftAddress,
        uint256 tokenId
    )
        external
        isNftOwner(nftAddress, tokenId, msg.sender)
        isListed(nftAddress, tokenId)
    {
        delete (s_nftList[nftAddress][tokenId]);
        emit ItemCanceled(msg.sender, nftAddress, tokenId, block.timestamp);
    }

    /////////////////
    //Get Functions//
    /////////////////

    function getListing(
        address nftAddress,
        uint256 tokenId
    ) external view returns (Listing memory) {
        return s_nftList[nftAddress][tokenId];
    }

    function getAmountEarned(address seller) external view returns (uint256) {
        return s_amountEarned[seller];
    }

    function getLatestPriceInUSD(
        address nftAddress,
        uint256 tokenId,
        address aggregator
    ) public view returns (uint256) {
        uint256 priceETH = (s_nftList[nftAddress][tokenId]).price;
        return priceETH.convertPrice(aggregator); // function from ConverterEthToUsd contract
    }
}
