"use client"
import { createContext, useContext, useEffect, useState } from 'react'
import { Web3 } from "web3"
import { marketplaceAbi, nftAbi, marketplaceAddress } from "@/constants"

export const NftContext = createContext()


export default function NftProvider({ children }) {
    const [nfts, setNfts] = useState([])

    function convertIpfsToHttp(ipfsUrl) {
        const ipfsPath = ipfsUrl.replace("ipfs://", "")
        const gatewayUrl = "https://gateway.pinata.cloud/ipfs/"
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

    function removeCanceledItems(list_of_nfts, canceledItems) {
        return list_of_nfts.filter(listedItem => {
            return !(
                listedItem.returnValues.nftAddress == canceledItems.returnValues.nftAddress
                && listedItem.returnValues.tokenId == canceledItems.returnValues.tokenId
                && listedItem.returnValues.owner == canceledItems.returnValues.owner
                && listedItem.returnValues.timestamp < canceledItems.returnValues.timestamp
            )
        })
    }

    async function getNftList() {
        let web3, contract, nftContract

        web3 = new Web3("wss://eth-sepolia.g.alchemy.com/v2/uu7wwXlSQWxZ7bwhzqMV2IERSlEsdohP")
        contract = new web3.eth.Contract(marketplaceAbi, marketplaceAddress)

        let NftList = await contract.getPastEvents("ItemListed", {
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
            })
        )

        return NftList
    }

    useEffect(() => {
        getNftList().then(setNfts).catch(console.error)
    }, [])

    const addNft = (newNft) => {
        setNfts(currentNfts => [...currentNfts, newNft])
    }

    return (
        <NftContext.Provider value={{ nfts, addNft }}>
            {children}
        </NftContext.Provider>
    )

}
