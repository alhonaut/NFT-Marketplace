import Web3 from "web3"
import { useEffect, useState } from "react"
import Image from "next/image"
import { marketplaceAddress, marketplaceAbi } from "@/constants"
import { networkConfig } from "../contract/helper.hardhat.config"
import { useAccount } from "wagmi"
import { useRouter } from "next/navigation"


let web3, accounts, contract, chainId
async function _beforeStartInitialization() {
    if (typeof window.ethereum !== "undefined") {
        web3 = new Web3(window.ethereum)
    } else {
        web3 = new Web3("wss://eth-sepolia.g.alchemy.com/v2/uu7wwXlSQWxZ7bwhzqMV2IERSlEsdohP")
    }
    accounts = await web3.eth.getAccounts()
    contract = new web3.eth.Contract(marketplaceAbi, marketplaceAddress)
}
_beforeStartInitialization()

export default function Nft({ name, seller, description, price, image, childFunction, _nftaddress, _tokenId, ButtonName, isBought = false, isYour = false }) {
    const wallet = useAccount()
    const router = useRouter()
    const slicedAddress = `${seller.slice(0, 7)}...${seller.slice(-5)}`
    const [owner, setOwner] = useState(slicedAddress)
    const [latestPrice, setLatestPrice] = useState()

    useEffect(() => {
        _beforeStartInitialization()
        if (wallet.status == "connected") {
            seller == accounts[0] ? setOwner("You") : null

            window.ethereum.on("accountsChanged", (accounts) => {
                seller.toLowerCase() == accounts[0] ? setOwner("You") : setOwner(slicedAddress)
            })
        }

        if (wallet.status == "disconnected") {
            setOwner(slicedAddress)
        }

        const getLatestPriceInUSD = async () => {
            chainId = 5
            const priceInUsd = await contract.methods.getLatestPriceInUSD(_nftaddress, _tokenId, networkConfig[chainId].ethUsdPriceFeed).call()
            const correctPriceInUsd = web3.utils.fromWei(priceInUsd, "ether")
            setLatestPrice(parseFloat(correctPriceInUsd).toFixed(2))
        }
        getLatestPriceInUSD()

        const interval = setInterval(getLatestPriceInUSD, 3600000)

        return () => clearInterval(interval)
    }, [wallet.status, price])

    const navigationToNftInfo = () => {
        const queryParams = {
            name,
            seller,
            description,
            price,
            image,
            _nftaddress,
            _tokenId
        }

        const queryUrl = new URLSearchParams(queryParams).toString()
        router.push(`https://nft-marketplace-kappa-flame.vercel.app/nft-info?${queryUrl}`)
    }

    return (
        <div className="transition-transform duration-300 hover:scale-105">
            <div className="bg-gradient-to-r from-pink-900 to-purple-950 flex rounded-xl border-2 border-gray-900 justify-start items-start p-0.5 mx-9 mb-6 relative">
                <div className="flex flex-col justify-start items-start" onClick={navigationToNftInfo}>
                    <Image
                        loader={() => image}
                        src={image}
                        alt="Nft Image"
                        width="325"
                        height="300"
                        //style={{ width: "325px", height: "300px" }}
                        className="rounded-lg border-2 border-slate-900"
                    />
                    <div className="flex flex-col justify-start items-start m-2">
                        <p className="text-left text-white text-lg">{name}</p>
                        <p className="text-left text-white text-lg">Owner: {!isYour ? owner : "You"}</p>
                        {!isBought ? <div className="text-left text-white">
                            <p className="text-sm">Current price</p>
                            <p className="text-sm">{price} ETH (${latestPrice})</p>
                        </div> : <p className="italic text-lg text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 via-gray-800 to-slate-900">You Bought this NFT</p>}
                    </div>
                </div>

                {!isBought && <div className="absolute bottom-2.5 right-2.5">
                    <button onClick={childFunction ? childFunction : navigationToNftInfo} className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-1.5 px-3 rounded-xl">
                        {ButtonName}
                    </button>
                </div>}

            </div>
        </div>
    )
}
