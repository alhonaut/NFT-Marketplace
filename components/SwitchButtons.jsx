import React, { useEffect, useState } from "react"

export default function SwitchButtons({ onButtonChange }) {
    const [activeButton, setActiveButton] = useState(null)

    const checking = (name) => {
        if (activeButton == name) {
            console.log("You alreade clicked button")
            return
        }
        setActiveButton(name)
        onButtonChange(name)
        localStorage.setItem("status", name)
    }

    useEffect(() => {
        setActiveButton(localStorage.getItem("status"))
    }, [])

    const getButtonClass = (buttonName) => {
        let baseClass = "text-white bg-amber-600 hover:bg-amber-700 border-slate-900 font-medium text-sm px-5 py-2 text-center mb-2"
        if (buttonName === activeButton) {
            baseClass += " bg-amber-700"
        }
        return baseClass
    }

    return (
        <div>
            <button
                type="button"
                className={`border-orange-900 font-medium border-2 rounded-l-xl ${getButtonClass("All")}`}
                onClick={() => checking("All")}
            >
                All
            </button>
            <button
                type="button"
                className={`border-orange-900 font-medium border-y-2 ${getButtonClass("Listed")}`}
                onClick={() => checking("Listed")}
            >
                Listed
            </button>
            <button
                type="button"
                className={`border-orange-900 font-medium border-2 rounded-r-xl ${getButtonClass("Bought")}`}
                onClick={() => checking("Bought")}
            >
                Bought
            </button>
        </div>
    )
}