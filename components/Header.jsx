"use client"
import Link from "next/link"
import { useState } from "react"
import SellNftWindow from "./SellNftWindow"
import { CSSTransition } from "react-transition-group"

export default function Header() {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-800 p-2 border-b-2 flex flex-row justify-between items-center">
            <h1 className="py-4 px-4 text-3xl font-bold text-white"><span className="font-semibold">Closed</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-purple-950 to-slate-950 font-bold">Ocean</span></h1>
            <div className="flex flex-row items-center space-x-10 text-lg">
                <Link href="/" className="group text-white hover:text-gray-300 transition duration-300">
                    Home
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-pink-600"></span>
                </Link>
                <Link href="/nft-marketplace" className="group text-white hover:text-gray-300 transition duration-300">
                    Marketplace
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-pink-600"></span>
                </Link>
                <Link href="/your-nfts" className="group text-white hover:text-gray-300 transition duration-300">
                    Your NFTs
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-pink-600"></span>
                </Link>
                <button
                    className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-2xl transition duration-300"
                    onClick={() => setShowModal(true)}
                >
                    Sell NFT
                </button>
                <w3m-button />
                <div>
                    {showModal ? <div className="fixed inset-0 z-10 bg-black bg-opacity-50"></div> : null}
                    <CSSTransition in={showModal} classNames="alert" timeout={300} unmountOnExit>
                        <SellNftWindow onClose={() => setShowModal(false)} title="Put Your NFT Data">
                            <div className="flex flex-col gap-3 w-72 mt-3">
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input placeholder="NFT Address"
                                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-800 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" id="nftAddress" />
                                    <label
                                        className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-800 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-800 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-800 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-800">
                                        NFT Address
                                    </label>
                                </div>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input placeholder="Token ID"
                                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-800 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" id="tokenId" />
                                    <label
                                        className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-800 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-800 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-800 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-800">
                                        Token ID
                                    </label>
                                </div>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input placeholder="Price (ETH)"
                                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-800 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" id="price" />
                                    <label
                                        className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-800 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-800 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-800 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-800">
                                        Price
                                    </label>
                                </div>
                            </div>
                        </SellNftWindow>
                    </CSSTransition>
                </div>
            </div>
        </div>
    );
}