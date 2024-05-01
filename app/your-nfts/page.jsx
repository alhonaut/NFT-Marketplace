"use client"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageTransition from "@/components/PageTransitions"
import Nft from "@/components/Nft"
import SwitchButtons from "@/components/SwitchButtons"
import WithdrawButton from "@/components/WithdrawButton"
import Web3 from "web3"
import getAllNfts from "./AllUserNfts"
import getListedNfts from "./ListedUserNfts"
import getBoughtNfts from "./BoughtUserNfts"
import { useEffect, useState } from "react"
import Snackbar from "@mui/material/Snackbar"
import { marketplaceAbi, marketplaceAddress } from "@/constants"
import { useAccount } from "wagmi"

let web3, accounts, contract
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


export default function YourNFTs() {
    const [userNfts, setUserNfts] = useState([])
    const [buttonClicked, setButtonClicked] = useState()
    const [isConnected, setConnectedStatus] = useState()
    const [first, setfirst] = useState()
    const [open, setOpen] = useState(false)
    const wallet = useAccount()

    const handleChangeButton = (buttonName) => {
        setButtonClicked(buttonName)
    }

    async function CancelListing(nftAddress, tokenId) {
        await contract.methods.cancelListing(nftAddress, tokenId).send({ from: accounts[0] })
            .then(() => {
                setUserNfts(currentNfts => {
                    return currentNfts.filter(nft =>
                        !(nft.returnValues.nftAddress == nftAddress && nft.returnValues.tokenId == tokenId)
                    )
                })
                setOpen(true)
            })
    }

    const updateNfts = (walletAddress) => {
        const buttonStatus = localStorage.getItem("status")

        if (buttonStatus == "All") {
            getAllNfts(walletAddress)
                .then(Nfts => {
                    setConnectedStatus(true)
                    setUserNfts(Nfts)
                    console.log(Nfts)
                })
        }

        else if (buttonStatus == "Listed") {
            getListedNfts(walletAddress)
                .then(NftList => {
                    setConnectedStatus(true)
                    setUserNfts(NftList)
                })
        }

        else if (buttonStatus == "Bought") {
            getBoughtNfts(walletAddress)
                .then(NftBuy => {
                    setConnectedStatus(true)
                    setUserNfts(NftBuy)
                })
        }
    }

    useEffect(() => {
        if (wallet.status == "connected") {
            setfirst("You haven't picked your NFTs yet.")
            updateNfts(wallet.address)
            window.ethereum.on("accountsChanged", (wallets) => {
                updateNfts(wallets[0])
            })
        }
        else if (wallet.status == "disconnected") {
            setConnectedStatus(false)
            setfirst("Please connect your Wallet")
        }
    }, [buttonClicked, wallet.status])

    return (
        <PageTransition>
            <div className="min-h-screen bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-800 flex flex-col relative overflow-hidden">
                <Header />
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css" rel="stylesheet" />
                <div className="min-h-screen flex flex-col relative overflow-hidden">
                    <div className="min-h-screen flex flex-col relative overflow-hidden">
                        <div className="flex justify-between">
                            <div className="m-4">
                                <WithdrawButton />
                            </div>
                            <div className="m-4">
                                <SwitchButtons onButtonChange={handleChangeButton} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 m-2">
                            {isConnected ?
                                userNfts.length != 0 ?
                                    userNfts.map((nft) => (
                                        <Nft
                                            name={nft.returnValues.name}
                                            seller={nft.returnValues.owner || nft.returnValues.newOwner}
                                            description={nft.returnValues.description}
                                            price={web3.utils.fromWei(nft.returnValues.price, "ether")}
                                            image={nft.returnValues.image}
                                            isYour={true}
                                            isBought={nft.returnValues.type == "L" ? false : true}
                                            ButtonName={"Cancel Listing"}
                                            childFunction={() => CancelListing(nft.returnValues.nftAddress, nft.returnValues.tokenId)}

                                            _nftaddress={nft.returnValues.nftAddress}
                                            _tokenId={nft.returnValues.tokenId}
                                        />
                                    ))
                                    :
                                    <div className="flex items-center justify-center col-span-4">
                                        <p className="text-xl text-transparent bg-clip-text font-semibold bg-gradient-to-r from-stone-700 via-stone-800 to-stone-900">
                                            You don't have {buttonClicked == "All" ? "" : buttonClicked} Items yet.
                                        </p>
                                    </div>
                                :
                                <div className="flex h-60 items-center justify-center col-span-4">
                                    <div className="text-2xl text-transparent bg-clip-text font-semibold bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950">
                                        <p>{first}</p>
                                    </div>
                                </div>}
                        </div>
                        <Snackbar
                            message="NFT is Canceled"
                            anchorOrigin={{ vertical: "top", horizontal: "center" }}
                            autoHideDuration={6000}
                            onClose={() => setOpen(false)}
                            open={open}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        </PageTransition>
    )
}
