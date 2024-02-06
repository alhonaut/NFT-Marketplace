"use client"
import { useState } from "react"
import { FaEthereum } from "react-icons/fa"
import Web3 from "web3"
import { marketplaceAbi, marketplaceAddress } from "@/constants"


let web3, accounts, contract
async function _beforeStartInitialization() {
    if (typeof window.ethereum !== "undefined") {
        await Promise.resolve(
            web3 = new Web3(window.ethereum),
            accounts = await web3.eth.getAccounts(),
            contract = new web3.eth.Contract(marketplaceAbi, marketplaceAddress)
        )
    }
}
_beforeStartInitialization()


export default function WithdrawButton() {
    const [amount, setAmount] = useState()

    async function getAmount() {
        try {
            const result = await contract.methods.getAmountEarned(accounts[0]).call({ from: accounts[0] })
            setAmount(web3.utils.fromWei(result, "ether"))
        } catch (error) {
            console.error(error)
        }
    }
    getAmount()

    const withdrawFunds = async () => {
        await contract.methods.withdrawFunds().send({ from: accounts[0] })
            .then(() => {
                getAmount()
            })
    }

    return (
        <div className="flex">
            <div className="flex justify-center items-center mr-3">
                <p className="text-transparent text-lg bg-clip-text bg-gradient-to-r from-zinc-800 to-neutral-800 font-semibold">
                    Your Balance <span className="text-transparent text-slate-950 font-bold">{amount}</span>
                </p>
                <FaEthereum />
            </div>
            <button
                type="button"
                className="inline-block rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-sky-700 px-6 py-2 text-xs font-medium uppercase leading-normal text-gray-200 shadow-md transition duration-150 ease-in-out hover:from-cyan-700 hover:via-teal-700 hover:to-sky-800 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring focus:ring-blue-200 active:bg-blue-700 dark:shadow-lg"
                onClick={withdrawFunds}
            >
                Withdraw
            </button>
        </div>
    )
}
