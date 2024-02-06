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

function removeBoughtItems(list_of_nfts, boughtItem) {
    return list_of_nfts.filter(listedItem => {
        return !(
            listedItem.returnValues.nftAddress == boughtItem.returnValues.nftAddress
            && listedItem.returnValues.tokenId == boughtItem.returnValues.tokenId
            && listedItem.returnValues.owner !== boughtItem.returnValues.newOwner
            && listedItem.returnValues.timestamp < boughtItem.returnValues.timestamp
        )
    })
}

function removeCanceledItems(list_of_nfts, canceledItem) {

    return list_of_nfts.filter(listedItem => {
        console.log(listedItem.returnValues, canceledItem.returnValues)
        return !(
            listedItem.returnValues.nftAddress == canceledItem.returnValues.nftAddress
            && listedItem.returnValues.tokenId == canceledItem.returnValues.tokenId
            && listedItem.returnValues.owner == canceledItem.returnValues.owner
            && listedItem.returnValues.timestamp < canceledItem.returnValues.timestamp
        )
    })
}


export default async function getListedNfts(nftOwner) {
    await _beforeStartInitialization();

    let NftList = await contract.getPastEvents("ItemListed", {
        filter: { owner: nftOwner },
        fromBlock: 0,
        toBlock: "latest"
    })

    let NftBuy = await contract.getPastEvents("ItemBought", {
        fromBlock: 0,
        toBlock: "latest"
    })

    let NftCancel = await contract.getPastEvents("ItemCanceled", {
        fromBlock: 0,
        toBlock: "latest"
    })

    NftBuy.forEach(boughtItem => {
        NftList = removeBoughtItems(NftList, boughtItem)
    })

    NftCancel.forEach(canceledItem => {
        NftList = removeCanceledItems(NftList, canceledItem)
    })

    await Promise.all(
        NftList.map(async (nft) => {
            nftContract = new web3.eth.Contract(nftAbi, nft.returnValues.nftAddress)
            const tokenURI = await nftContract.methods.TOKEN_URI().call()
            const httpUrl = convertIpfsToHttp(tokenURI)
            const dataJSON = await (await fetch(httpUrl)).json()
            nft.returnValues["image"] = dataJSON.image
            nft.returnValues["name"] = dataJSON.name
            nft.returnValues["description"] = dataJSON.description
            nft.returnValues["type"] = "L" // if NFT is Listed(L) or Bought(B) by user 
        })
    )

    return NftList
}

