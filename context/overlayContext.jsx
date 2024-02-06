"use client"
import { createContext, useState, useContext } from "react"

const OverlayContext = createContext();

export const OverlayProvider = ({ children }) => {
    const [showOverlay, setShowOverlay] = useState(false)

    return (
        <OverlayContext.Provider value={{ showOverlay, setShowOverlay }}>
            {children}
        </OverlayContext.Provider>
    )
}

export const useOverlay = () => useContext(OverlayContext)