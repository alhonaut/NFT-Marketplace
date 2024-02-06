import { Fragment, useState, useEffect } from "react"
import { useOverlay } from "@/context/overlayContext"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { useSearchParams } from "next/navigation"
import Link from "next/link"


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DropDownMenu() {
    const searchParams = useSearchParams()
    const sortValue = searchParams.get("sort")
    const { showOverlay, setShowOverlay } = useOverlay(false)
    const [status, setStatus] = useState(() => {
        if (sortValue == "cheap") {
            return "Price: Low to High"
        }
        else if (sortValue == "expensive") {
            return "Price: High to Low"
        }
        else if (sortValue == "newest") {
            return "Time: New to Old"
        }
        else if (sortValue == "oldest") {
            return "Time: Old to New"
        }
        else {
            return "Sort by"
        }
    })

    useEffect(() => {
        localStorage.setItem("status", status)
    }, [status])

    const handleMenuItemClick = (newStatus) => {
        setStatus(newStatus)
        setShowOverlay(true)
    }


    return (
        <Menu as="div" className="relative inline-block text-left w-44">
            {showOverlay && <div className="fixed inset-0 z-10 bg-black bg-opacity-70"></div>}
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-xl bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-purple-950 hover:from-purple-600 hover:via-purple-700 hover:to-purple-800">
                    {status}
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-xl bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href="/nft-marketplace/sorted-list?sort=newest"
                                    onClick={() => { handleMenuItemClick("Time: New to Old") }}
                                    className={classNames(
                                        active ? 'bg-gradient-to-r from-purple-600 to-purple-700 rounded-t-md text-gray-900' : 'text-gray-800',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Time: New to Old
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href="/nft-marketplace/sorted-list?sort=oldest"
                                    onClick={() => { handleMenuItemClick("Time: Old to New") }}
                                    className={classNames(
                                        active ? 'bg-gradient-to-r from-purple-600 to-purple-700 rounded-b-md text-gray-900' : 'text-gray-800',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Time: Old to New
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href="/nft-marketplace/sorted-list?sort=cheap"
                                    onClick={() => { handleMenuItemClick("Price: Low to High") }}
                                    className={classNames(
                                        active ? 'bg-gradient-to-r from-purple-600 to-purple-700 rounded-t-md text-gray-900' : 'text-gray-800',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Price: Low to High
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href="/nft-marketplace/sorted-list?sort=expensive"
                                    onClick={() => { handleMenuItemClick("Price: High to Low") }}
                                    className={classNames(
                                        active ? 'bg-gradient-to-r from-purple-600 to-purple-700 rounded-b-md text-gray-900' : 'text-gray-800',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Price: High to Low
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}