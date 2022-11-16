import Image from 'next/image'

import logo from "../public/images/logo.svg"

import Link from 'next/link'

import { useState} from 'react'


import Hamburger from 'hamburger-react'


export default function Navbar() {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="fixed w-screen h-24 bg-black flex items-center justify-between z-50 top-0">
                <div>
                    <Link href="/">
                        <a className="flex flex-row items-center">
                            <Image
                            src={logo}
                            alt="Refract VFX"
                            width={100}
                            height={80}
                            layout="fixed"
                            />
                          <h2 className="text-2xl font-black text-white">REFRACT<span className='text-blue-300'>VFX</span></h2>
                        </a>
                    </Link>
                </div>
                <ul className="w-auto hidden md:items-center md:justify-around md:flex ml-auto text-white pr-5">
                    <li className="px-4">
                        <Link href="/">
                            <a className="text-white hover:text-red-400">Home</a>
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link href="/about">
                            <a className="text-white hover:text-red-400">About</a>
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link href="/work">
                                <a className="text-white hover:text-red-400">Work</a>
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link href="/contact">
                                <a className="text-white hover:text-red-400">Contact</a>
                        </Link>
                    </li>
                </ul>
                <button onClick={() => setOpen(!open)} className="text-white cursor-pointer ml-auto px-5 md:hidden" type="button">
                    <Hamburger toggled={open} toggle={setOpen} />
                </button>
            </div>
            <div className="overflow-y-hidden md:hidden absolute top-0 left-0 right-0">
                <div className={(open ? "flex opacity-100 z-50" : "hidden z-0")}>
                    <div className="w-full h-screen fixed overflow-y-hidden bg-gray-900 text-white flex flex-col items-center justify-center z-40">
                        <ul className="text-center font-bold text-4xl leading-loose">
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
