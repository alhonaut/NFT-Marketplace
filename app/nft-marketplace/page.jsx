"use client"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import DropDownMenu from "@/components/DropDownMenu"
import PageTransition from "@/components/PageTransitions"
import Nft from "@/components/Nft"
import SearchBar from "@/components/SearchBar"
import { NftContext } from "@/context/nftContext"
import { useContext, useState, useEffect } from "react"
import Web3 from "web3"
import { marketplaceAddress, marketplaceAbi } from '../../constants'

let web3, contract
async function _beforeStartInitialization() {
    web3 = new Web3("wss://eth-sepolia.g.alchemy.com/v2/uu7wwXlSQWxZ7bwhzqMV2IERSlEsdohP")
    contract = new web3.eth.Contract(marketplaceAbi, marketplaceAddress)
}
_beforeStartInitialization()


export default function page() {
    const { nfts } = useContext(NftContext)
    const [searchTerm, setSearchTerm] = useState(null)
    const filteredNfts = searchTerm
        ? nfts.filter(nft =>
            nft.returnValues.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            nft.returnValues.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : nfts


    return (
        <PageTransition>
            <div className="min-h-screen bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-800 flex flex-col relative overflow-hidden">
                <Header />
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css" rel="stylesheet" />
                <div className="min-h-screen flex-col relative overflow-hidden">
                    <div className="flex justify-end m-4 mr-9">
                        <SearchBar onSearchChange={setSearchTerm} />
                        <DropDownMenu />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 m-2">
                        {filteredNfts.map((nft) => (
                            <Nft
                                name={nft.returnValues.name}
                                seller={nft.returnValues.owner}
                                description={nft.returnValues.description}
                                price={web3.utils.fromWei(nft.returnValues.price, "ether")}
                                image={nft.returnValues.image}
                                ButtonName="Buy Now"

                                _nftaddress={nft.returnValues.nftAddress}
                                _tokenId={nft.returnValues.tokenId}
                            />
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </PageTransition>
    )
}
