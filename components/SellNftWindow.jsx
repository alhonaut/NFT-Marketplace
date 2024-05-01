"use client"
import { useRef, useEffect, useContext, useState } from "react"
import Web3 from "web3"
import { marketplaceAddress, marketplaceAbi, nftAbi } from "@/constants"
import { NftContext } from "@/context/nftContext"
import { useAccount } from "wagmi"

let accounts, contract, web3, nftContract
async function _beforeStartInitialization() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum)
    } else {
        web3 = new Web3("wss://eth-sepolia.g.alchemy.com/v2/uu7wwXlSQWxZ7bwhzqMV2IERSlEsdohP")
    }
    accounts = await web3.eth.getAccounts()
    contract = new web3.eth.Contract(marketplaceAbi, marketplaceAddress)
}
_beforeStartInitialization()


export default function SellNftWindow({ onClose, title, children }) {
    const windowRef = useRef()
    const [isListed, setListingStatus] = useState(false)
    const [isLoading, setLoadingStatus] = useState(false)
    const wallet = useAccount()
    const { addNft } = useContext(NftContext)

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (event.target == windowRef.current) {
                onClose()
            } else {
                return
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [])

    const closeDialog = (e) => {
        e.preventDefault()
        onClose()
    }

    async function ListNft() {
        if (wallet.status !== "connected") {
            const errorMessage = "You don't have wallet connected!"
            document.getElementById("text-error").textContent = errorMessage
            return
        }
        setLoadingStatus(true)

        try {
            const nftaddress = document.getElementById("nftAddress").value
            const tokenId = document.getElementById("tokenId").value
            const price = web3.utils.toWei(document.getElementById("price").value, "ether")
            console.log(accounts)
            await contract.methods.listItem(nftaddress, tokenId, price).send({ from: accounts[0] })

            setListingStatus(true)
        } catch (error) {
            let errorMessage
            if (error.toString().startsWith("Web3ValidatorError")) {
                errorMessage = "Put values correct!"
            } else {
                console.error(error)
                errorMessage = "Something went wrong!"
            }

            document.getElementById("text-error").textContent = errorMessage
            return
        } finally {
            setLoadingStatus(false)
        }

        function convertIpfsToHttp(ipfsUrl) {
            const ipfsPath = ipfsUrl.replace("ipfs://", "")
            const gatewayUrl = "https://gateway.pinata.cloud/ipfs/"
            return gatewayUrl + ipfsPath
        }

        const handleEvent = async (event) => {
            console.log(event)
            const nftContract = new web3.eth.Contract(nftAbi, event.returnValues.nftAddress)
            const tokenURI = await nftContract.methods.TOKEN_URI().call()
            const httpUrl = convertIpfsToHttp(tokenURI)
            const dataJSON = await (await fetch(httpUrl)).json()

            event.returnValues["image"] = dataJSON.image
            event.returnValues["name"] = dataJSON.name
            event.returnValues["description"] = dataJSON.description

            addNft(event)

            contract.events.ItemListed({
                fromBlock: "latest"
            }).off("data", handleEvent)
        }

        await contract.events.ItemListed({
            fromBlock: "latest"
        }).once("data", handleEvent)
    }

    return (
        <div ref={windowRef} className="fixed mt-14 inset-0 z-20 overflow-y-auto h-full w-full" id="my-modal">
            <div className="relative top-32 mx-auto p-5 border-4 border-[#610819] w-96 shadow-lg rounded-2xl bg-gradient-to-r from-pink-500 via-pink-700 to-pink-800">
                <div>
                    <div className="flex justify-end">
                        <button
                            onClick={closeDialog}
                            className=""
                        >❌</button>
                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl">{title}</h1>
                    </div>
                </div>
                <div className="px-2 pb-6 flex justify-center">
                    {children}
                </div>
                <div className="pb-2 text-center font-semibold text-[#52001d] text-sm">
                    <p id="text-error"></p>
                </div>
                {isListed ? <p className="text-center text-lg text-transparent font-bold bg-clip-text bg-gradient-to-r from-lime-500 via-green-500 to-lime-500">You succesfully Listed your NFT</p> : isLoading ?
                    <div role="status" className="flex justify-center mb-4">
                        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-pink-800" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                    </div>
                    :
                    <div className="flex justify-center text-s">
                        <button id="sell-button" className="flex justify-center rounded-xl border border-transparent w-36 h-12 items-center bg-red-300 px-4 py-2 text-xl font-medium text-red-900 hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                            onClick={() => ListNft()}
                        >
                            Sell
                        </button>
                    </div>}
            </div>
        </div>
    )
}
