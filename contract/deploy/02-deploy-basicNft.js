const { ethers } = require("hardhat");

async function main() {
    console.log("Deploying Example Nft...");
    const Nft = await ethers.deployContract("ExampleNFT");

    await Nft.waitForDeployment();

    console.log(`Example Nft succesfully deployed: ${Nft.target}`);

    const mintTx = await Nft.safeMint();

    const mintTxReceipt = await mintTx.wait(1);
    const tokenId = await mintTxReceipt.logs[0].args.tokenId

    console.log("Approving Nft...");
    const approveTx = await Nft.approve("0x744EB9F47bbAA2A4975033385c9814eEF5067Dc0", tokenId);
    await approveTx.wait(1);

    console.log(tokenId);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });