"use client"
import { useState, useEffect } from 'react'

const PageTransition = ({ children }) => {
    const [isPageLoading, setPageLoading] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => setPageLoading(false), 400)
        return () => clearTimeout(timeout)
    }, [])

    return (
        <div className="bg-gradient-to-r from-purple-400 via-purple-600 to-indigo-700">
            <div className={`transition-all ease-in-out duration-300 ${isPageLoading ? "opacity-0" : "opacity-100"}`}>
                {children}
            </div>
        </div>
    )
}

export default PageTransition