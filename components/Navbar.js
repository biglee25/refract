import Link from 'next/link'

import { useState} from 'react'


import Hamburger from 'hamburger-react'


export default function Navbar() {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="fixed top-0 w-screen h-24 bg-gray-800 flex items-center justify-between px-12 z-50">
                <div>
                    <h2 className="text-3xl font-bold text-white">REFRACT</h2>
                </div>
                <ul className="w-auto hidden md:items-center md:justify-around md:flex ml-auto text-white">
                    <li className="px-4">
                        <Link href="/">
                            <a className="hover:text-orange-400">Home</a>
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link href="/about">
                            <a className="hover:text-orange-400">About</a>
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link href="/work">
                                <a className=" hover:text-orange-400">Work</a>
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link href="/contact">
                                <a className="hover:text-orange-400">Contact</a>
                        </Link>
                    </li>
                </ul>
                <button onClick={() => setOpen(!open)} className="text-white cursor-pointer ml-auto md:hidden z-40" type="button">
                    <Hamburger toggled={open} toggle={setOpen} />
                </button>
            </div>
            <div className="overflow-hidden fixed md:hidden top-0 left-0 right-0">
                <div className={(open ? "z-30 flex translate-y-100 transition ease-out duration-500 overflow-y-hidden" : "translate-y-full transition ease-out duration-500")}>
                    <div className="w-full h-screen bg-gray-800 text-white flex flex-col items-center justify-center overflow-y-hidden">
                        <ul className="text-center font-bold text-4xl leading-loose overflow-y-hidden">
                            <li className="px-4">
                                <Link href="/">
                                    <a className="hover:text-orange-400" onClick={() => setTimeout(() => {setOpen(false)}, 150)}>Home</a>
                                </Link>
                            </li>
                            <li className="px-4">
                                <Link href="/about">
                                    <a className="hover:text-orange-400" onClick={() => setTimeout(() => {setOpen(false)}, 150)}>About</a>
                                </Link>
                            </li>
                            <li className="px-4">
                                <Link href="/work">
                                        <a className=" hover:text-orange-400" onClick={() => setTimeout(() => {setOpen(false)}, 150)}>Work</a>
                                </Link>
                            </li>
                            <li className="px-4">
                                <Link href="/contact">
                                        <a className="hover:text-orange-400" onClick={() => setTimeout(() => {setOpen(false)}, 150)}>Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>    
                </div>
            </div>
    </>
    )
};
