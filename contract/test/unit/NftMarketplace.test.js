const { assert, expect } = require("chai");
const { developmentChains } = require("../../helper.hardhat.config");
const { ethers } = require("hardhat");

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Nft Marketplace Unit Test", () => {
        let signers, marketplace, marketplaceContract, Nft, price;
        beforeEach(async () => {
            signers = await ethers.getSigners();
            price = ethers.parseEther("1");
            marketplaceContract = await ethers.deployContract("NftMarketplace");
            marketplace = marketplaceContract.connect(signers[0]);
            Nft = await ethers.deployContract("ExampleNFT");
            await Nft.safeMint(signers[0].address, 0);
            await Nft.approve(marketplace.target, 0);
        });

        describe("Listing NFT to Marketplace", () => {
            it("Should emit event after listing", async () => {
                expect(await marketplace.listItem(Nft.target, 0, price)).to.emit("ItemListed");
            });

            it("Should revert error when Nft already listed", async () => {
                await marketplace.listItem(Nft.target, 0, price)
                await expect(
                    marketplace.listItem(Nft.target, 0, price)
                ).to.be.revertedWithCustomError(marketplace, "NftMarketplace__NftAlreadyListed").withArgs(Nft.target, 0);
            });

            it("Should revert error when price incorrect", async () => {
                const zeroPrice = ethers.parseEther("0")
                await expect(
                    marketplace.listItem(Nft.target, 0, zeroPrice)
                ).to.be.revertedWithCustomError(marketplace, "NftMarketplace__PriceMustBeAboveZero");
            });

            it("Should revert error when Nft not approved", async () => {
                const notApprovedNft = await ethers.deployContract("ExampleNFT");
                await notApprovedNft.safeMint(signers[0].address, 0);
                await expect(
                    marketplace.listItem(notApprovedNft.target, 0, price)
                ).to.be.revertedWithCustomError(marketplace, "NftMarketplace__NftNotApproved");
            });
        });

        describe("Buying NFT", () => {
            let marketplace1;
            beforeEach(async () => {
                marketplace1 = marketplace.connect(signers[1]);
                await marketplace.listItem(Nft.target, 0, price);
            });

            it("Should buy NFT", async () => {
                await marketplace1.buyItem(Nft.target, 0, { value: price });
            });

            it("Should revert error when price isnt met", async () => {
                await expect(marketplace1.buyItem(Nft.target, 0)).to.be.reverted;
            });

            it("Should emit event after buying", async () => {
                expect(await marketplace1.buyItem(Nft.target, 0, { value: price })).to.emit("ItemBought");
            });

            it("Should transfer ownership to buyer", async () => {
                await marketplace1.buyItem(Nft.target, 0, { value: price });
                const newOwner = await Nft.ownerOf(0);
                assert.equal(newOwner, signers[1].address);
            });

            it("Should give money after buying", async () => {
                const balance = await marketplace1.getAmountEarned(signers[1].address);
                expect(await marketplace1.buyItem(Nft.target, 0, { value: price })).to.changeEtherBalance(signers[1].address, balance);
            });
        });

        describe("Update Listing", () => {
            let newPrice;
            beforeEach(async () => {
                newPrice = ethers.parseEther("2");
                await marketplace.listItem(Nft.target, 0, price);
            });

            it("Should revert error when new price incorrect", async () => {
                const zeroPrice = ethers.parseEther("0")
                await expect(
                    marketplace.updateListing(Nft.target, 0, zeroPrice)
                ).to.be.revertedWithCustomError(marketplace, "NftMarketplace__PriceMustBeAboveZero");
            });

            it("Should change price", async () => {
                await marketplace.updateListing(Nft.target, 0, newPrice);
                assert.equal((await marketplace.getListing(Nft.target, 0)).price, newPrice);
            });

            it("Should emit event after listing", async () => {
                expect(await marketplace.updateListing(Nft.target, 0, newPrice)).to.emit("ItemListed");
            });
        });

        describe("Canceling Item", () => {
            let cancelListing;
            beforeEach(async () => {
                await marketplace.listItem(Nft.target, 0, price);
                cancelListing = await marketplace.cancelListing(Nft.target, 0);
            });

            it("Should emit event after canceling", async () => {
                expect(cancelListing).to.emit("ItemListed");
            });

            it("Should delete Nft from storage", async () => {
                assert.equal(await marketplace.getListing(Nft.target, 0)[0], undefined);
            });
        });

        describe("Withdraw Funds", () => {
            let marketplace1;
            beforeEach(async () => {
                marketplace1 = marketplace.connect(signers[1]);
                await marketplace.listItem(Nft.target, 0, price);
                await marketplace1.buyItem(Nft.target, 0, { value: price });
            });

            it("Should withdraw funds", async () => {
                await marketplace.withdrawFunds();
            });

            it("Should revert error when user don't have funds", async () => {
                await marketplace.withdrawFunds(); // here we withdraw funds, so after re-calling function should revert error
                await expect(
                    marketplace.withdrawFunds()
                ).to.be.revertedWithCustomError(marketplace, "NftMarketplace__NoFundsToWithdraw");
            });

            it("Should check is user got his funds", async () => {
                const balance = await marketplace.getAmountEarned(signers[0].address);
                expect(await marketplace.withdrawFunds()).to.changeEtherBalance(signers[0].address, balance);
            });
        });

        describe("Oracle", () => {
            let marketplace1, contract;
            beforeEach(async () => {
                marketplace1 = marketplace.connect(signers[1]);
                await marketplace.listItem(Nft.target, 0, ethers.parseEther("50"));
                const DECIMALS = 8;
                const INITIAL_ANSWER = 235000000000;
                const contractFactory = await ethers.getContractFactory("MockV3Aggregator");
                contract = await contractFactory.deploy(DECIMALS, INITIAL_ANSWER);
            });

            it("Should give correct ETH price to USD", async () => {
                const convertedPrice = await marketplace.getLatestPriceInUSD(Nft.target, 0, contract.target);
                console.log(ethers.formatUnits(
                    convertedPrice.toString(),
                    18
                ));
            });
        });

    })
