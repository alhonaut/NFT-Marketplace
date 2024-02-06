const { ethers } = require("hardhat");

async function main() {
    console.log("Deploying Nft Marketplace...");
    const marketplace = await ethers.deployContract("NftMarketplace");

    await marketplace.waitForDeployment();

    console.log(`Nft Marketplace succesfully deployed: ${marketplace.target}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });