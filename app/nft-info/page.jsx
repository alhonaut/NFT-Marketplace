"use client"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import PageTransition from "@/components/PageTransitions"
import Image from "next/image"
import copyToClipboardImage from "../../images/copyToclipboard.png"
import Snackbar from "@mui/material/Snackbar"
import { useAccount } from "wagmi"
import Web3 from "web3"
import { marketplaceAddress, marketplaceAbi, nftAbi } from "@/constants"
import { networkConfig } from "../../contract/helper.hardhat.config"


let web3, accounts, contract, nftcontract, chainId
async function _beforeStartInitialization() {
    if (typeof window.ethereum !== "undefined") {
        web3 = new Web3(window.ethereum)
        chainId = await web3.eth.getChainId()
    } else {
        web3 = new Web3("wss://eth-goerli.g.alchemy.com/v2/ZRVf6BagEk3VCqFlj7OKlq_jZUznQsGD")
        chainId = 5
    }
    accounts = await web3.eth.getAccounts()
    contract = new web3.eth.Contract(marketplaceAbi, marketplaceAddress)
}
_beforeStartInitialization()

export default function NftInfoWindow() {
    const wallet = useAccount();
    const searchParams = useSearchParams();
    const [open, setOpen] = useState(false);
    const [nftOwner, setOwnership] = useState();
    const [isNotBought, setBuyStatus] = useState();
    const [isLoading, setLoadingStatus] = useState(false);
    const [latestPrice, setLatestPrice] = useState();
    const [button, setButton] = useState("Connect Wallet");

    const address = searchParams.get("_nftaddress");
    const name = searchParams.get("name");
    const price = searchParams.get("price");
    const description = searchParams.get("description");
    const image = searchParams.get("image");
    const seller = searchParams.get("seller");
    const _tokenId = searchParams.get("_tokenId");

    const copyToClipboard = (text) => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                setOpen(true);
            }).catch(err => {
                console.error("Could not copy text: ", err);
            });
        }
    };

    useEffect(() => {
        const initialize = async () => {
            await _beforeStartInitialization()
            checkOwnership().then((ownershipResult) => {
                setBuyStatus(Boolean(parseInt(ownershipResult.owner, 16)))
            })
            getOwner()
            getLatestPriceInUSD()
        }

        initialize()
    }, [])

    async function getOwner() {
        nftcontract = new web3.eth.Contract(nftAbi, address)
        const newOwner = await nftcontract.methods.ownerOf(_tokenId).call()
        setOwnership(newOwner)
    }

    async function checkOwnership() {
        try {
            const result = await contract.methods.getListing(address, _tokenId).call()
            return result
        } catch (error) {
            console.error(error)
        }
    }

    checkOwnership().then((ownershipResult) => {
        setBuyStatus(Boolean(parseInt(ownershipResult.owner, 16)))
    }).catch((error) => {
        console.error(error)
    })

    async function getLatestPriceInUSD() {
        try {
            chainId ? chainId : chainId = 5
            const priceInUsd = await contract.methods.getLatestPriceInUSD(address, _tokenId, networkConfig[chainId].ethUsdPriceFeed).call()
            const correctPriceInUsd = web3.utils.fromWei(priceInUsd, "ether")
            setLatestPrice(parseFloat(correctPriceInUsd).toFixed(2))
        } catch (error) {
            console.error(error)
        }

    }

    async function BuyNft(nftAddress, tokenId) {
        if (wallet.status !== "connected") {
            return
        }
        setLoadingStatus(true)

        await contract.methods.buyItem(nftAddress, tokenId).send({
            from: accounts[0],
            value: web3.utils.toWei(price, "ether"),
        })
            .then(() => {
                getOwner()
            })
            .finally(() => {
                setLoadingStatus(false)
            })
    }

    useEffect(() => {
        if (wallet.status === "connected") {
            setButton("Buy Item")
        }
        if (wallet.status === "disconnected") {
            setButton("Please Connect Wallet")
        }

        getLatestPriceInUSD()

        const interval = setInterval(getLatestPriceInUSD, 3600000)

        return () => clearInterval(interval)
    }, [wallet.status])

    return (
        <PageTransition>
            <div className="bg-gradient-to-r from-purple-900 via-pink-900 to-indigo-950 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2">
                    <w3m-button />
                </div>
                <div className="h-screen flex flex-col items-start justify-between md:p-20 py-12 px-4">
                    <div className="border-2 border-black bg-gradient-to-t from from-purple-950 via-violet-950 to-fuchsia-950 rounded-2xl w-8/12 mx-auto justify-center items-center">
                        <div className="flex-1 flex flex-row justify-start items-start py-0">
                            <div className="flex-1 flex flex-col justify-start items-start py-12 ml-10 mr-2">
                                <Image
                                    loader={() => image}
                                    src={image}
                                    alt="Nft Image"
                                    width="400"
                                    height="400"
                                    className="border-2 border-black rounded-lg"
                                />
                            </div>
                            <div className="flex-2 flex flex-col justify-end items-start py-10 mr-0">
                                <p className="text-neutral-400 text-4xl mb-5 font-semibold">{name}</p>
                                <p className="text-stone-300 text-lg mb-6">Owned by:<br /><span className="text-slate-400 italic">{nftOwner}</span>
                                    <button className="ml-2 p-2 text-white" onClick={() => copyToClipboard(nftOwner)}>
                                        <img src={copyToClipboardImage.src} alt="Copy Icon" width="20" height="20" />
                                    </button>
                                </p>
                                <p className="text-stone-300 text-lg mb-6">NFT Address:<br /><span className="text-slate-400 italic">{address}</span>
                                    <button className="ml-2 p-2 text-white" onClick={() => copyToClipboard(address)}>
                                        <img src={copyToClipboardImage.src} alt="Copy Icon" width="20" height="20" />
                                    </button>
                                </p>
                                <p className="text-stone-300 text-lg mb-6">About NFT:<br /><span className="text-stone-400">{description}</span></p>
                                {isNotBought ?
                                    <div className="text-gray-200 text-3xl">{price} ETH <span className="text-lg">(${latestPrice})</span><br />
                                        {wallet.address !== seller ?
                                            (isLoading ?
                                                <div role="status">
                                                    <svg aria-hidden="true" className="w-8 h-8 m-3 ml-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                    </svg>
                                                </div>
                                                :
                                                <button onClick={() => BuyNft(address, _tokenId)} className="bg-gradient-to-r from-orange-700 via-amber-600 to-yellow-600 hover:from-orange-800 hover:via-amber-700 hover:to-yellow-700 text-slate-900 text-lg border-2 border-orange-800 font-bold py-1.5 px-3 mt-2 rounded-xl">
                                                    {button}
                                                </button>)
                                            :
                                            <p className="italic text-lg text-black mr-6 mt-1">You already purchased this NFT</p>}
                                    </div>
                                    :
                                    <p className="italic text-2xl text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-gray-950 to-slate-950 mr-6 mt-6">This NFT is Bought</p>}

                                <Snackbar
                                    message="Copied to Clipboard"
                                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                                    autoHideDuration={2000}
                                    onClose={() => setOpen(false)}
                                    open={open}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition >
    )
}
//border-2 border-black bg-gradient-to-t from from-purple-950 via-violet-950 to-fuchsia-950 rounded-2xl w-8/12 md:w-full mx-auto justify-center items-center md:ml-0