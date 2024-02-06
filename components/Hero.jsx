"use client"
import { FaLock, FaBolt, FaDollarSign } from "react-icons/fa"
import Footer from "./Footer"


const ServiceCard = ({ icon, title, subtitle }) => (
    <div className="bg-gradient-to-r from-indigo-700 to-purple-900 flex flex-row border-2 border-blue-950 rounded-full justify-center items-center white-glassmorphism w-96 p-3 m-3 cursor-pointer hover: shadow-xl">
        <div className="w-10 h-10 flex rounded-lg justify-center items-center m-3">
            {icon}
        </div>
        <div className="ml-5 mb-2">
            <h1 className="text-white text-lg mb-2">{title}</h1>
            <p className="text-white text-sm md:w-8/12">{subtitle}</p>
        </div>
    </div>
)

export default function Hero() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-800 flex flex-col relative overflow-hidden">
            <div className="min-h-screen flex flex-col relative overflow-hidden">
                <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-11 px-4">
                    <div className="flex-1 flex flex-col justify-start items-start py-0">
                        <div className="flex-1 flex flex-col justify-start items-start ml-4 mb-4">
                            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css" rel="stylesheet" />
                            <div className="text-1xl sm:text-2xl">
                                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
                                    <span className="font-semibold">Closed</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-950 font-bold">Ocean</span> is completely <br /> decentralized Nft Marketplace that <br /> alows users to <span className="text-transparent bg-clip-text font-semibold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">Listen</span>,
                                    <span className="text-transparent bg-clip-text font-semibold bg-gradient-to-r from-green-300 via-green-400 to-green-500"> Buy</span> and <span className="text-transparent bg-clip-text font-semibold bg-gradient-to-r from-red-300 via-red-400 to-red-500">Sell</span><br /> your NFTs accross the World
                                </h1>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-start items-start py-0">
                            <ServiceCard
                                title="Cheap Payment."
                                icon={<FaDollarSign fontSize={35} className="text-white" />}
                                subtitle="The cheapest commissions on the Market."
                            />
                            <ServiceCard
                                title="Fastest Transactions."
                                icon={<FaBolt fontSize={35} className="text-white" />}
                                subtitle="You can buy and sell quickly and easily."
                            />
                            <ServiceCard
                                title="Strong Security."
                                icon={<FaLock fontSize={35} className="text-white" />}
                                subtitle="Security is guaranteed by Cryptography."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
