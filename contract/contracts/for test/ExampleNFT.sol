// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

//bafkreid76sz6egjngtmq6uru7ptrvd5fzukhbq3hhsmroej5iqmn3kqsy4    -   test ipfs metadata
//bafybeig37ioir76s7mg5oobetncojcm3c3hxasyd4rvid4jqhy4gkaheg4/?filename=0-PUG.json    -    PUG ipfs metadata
contract ExampleNFT is ERC721, Ownable {
    uint256 private s_tokenCounter;
    string public constant TOKEN_URI =
        "ipfs://bafkreid76sz6egjngtmq6uru7ptrvd5fzukhbq3hhsmroej5iqmn3kqsy4"; // PUG Nft tokenURI

    event NftMinted(uint256 indexed tokenId);

    constructor() ERC721("Doggie", "DOG") Ownable(msg.sender) {
        s_tokenCounter = 0;
    }

    function safeMint() public onlyOwner {
        _safeMint(msg.sender, s_tokenCounter);
        emit NftMinted(s_tokenCounter);
        s_tokenCounter++;
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        //require(_exist(tokenId));
        return TOKEN_URI;
    }

    function getTokenCounter() public view returns (uint256) {
        return s_tokenCounter;
    }
}
