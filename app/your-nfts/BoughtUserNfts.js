import Web3 from "web3"
import { marketplaceAbi, marketplaceAddress, nftAbi } from "@/constants"

let web3, accounts, contract, nftContract
async function _beforeStartInitialization() {
    if (typeof window.ethereum !== "undefined") {
        await Promise.resolve(
            web3 = new Web3(window.ethereum),
            accounts = await web3.eth.getAccounts(),
            contract = new web3.eth.Contract(marketplaceAbi, marketplaceAddress)
        )
    }
}

function convertIpfsToHttp(ipfsUrl) {
    const ipfsPath = ipfsUrl.replace("ipfs://", "")
    const gatewayUrl = "https://ipfs.io/ipfs/"
    return gatewayUrl + ipfsPath
}


export default async function getBoughtNfts(nftOwner) {
    await _beforeStartInitialization()
    let NftBuy = await contract.getPastEvents("ItemBought", {
        filter: {
            newOwner: nftOwner
        },
        fromBlock: 0,
        toBlock: "latest"
    })

    await Promise.all(
        NftBuy.map(async (nft) => {
            nftContract = new web3.eth.Contract(nftAbi, nft.returnValues.nftAddress)
            const tokenURI = await nftContract.methods.TOKEN_URI().call()
            const httpUrl = convertIpfsToHttp(tokenURI)
            const dataJSON = await (await fetch(httpUrl)).json()
            nft.returnValues["image"] = dataJSON.image
            nft.returnValues["name"] = dataJSON.name
            nft.returnValues["description"] = dataJSON.description
            nft.returnValues["type"] = "B" // if NFT is Buyed(L) or Bought(B) by user 
        })
    )

    NftBuy.lenght !== 0 ? NftBuy : console.log("Dont have items")
    return NftBuy
}

