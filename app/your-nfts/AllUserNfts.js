import Web3 from "web3"
import getListedNfts from "./ListedUserNfts"
import getBoughtNfts from "./BoughtUserNfts"
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


export default async function getAllNfts(nftOwner) {
    await _beforeStartInitialization()

    let NftBuy = await getBoughtNfts(nftOwner)
    let NftList = await getListedNfts(nftOwner)

    let Nfts = NftList.concat(NftBuy)

    await Promise.all(
        Nfts.map(async (nft) => {
            nftContract = new web3.eth.Contract(nftAbi, nft.returnValues.nftAddress)
            const tokenURI = await nftContract.methods.TOKEN_URI().call()
            const httpUrl = convertIpfsToHttp(tokenURI)
            const dataJSON = await (await fetch(httpUrl)).json()
            nft.returnValues["image"] = dataJSON.image
            nft.returnValues["name"] = dataJSON.name
            nft.returnValues["description"] = dataJSON.description
        })
    )

    Nfts.lenght !== 0 ? Nfts : console.log("Dont have items")
    return Nfts
}
