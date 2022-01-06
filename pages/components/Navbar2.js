import { useState} from 'react'


import Hamburger from 'hamburger-react'


export default function Navbar2() {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="h-24 bg-gray-700 flex items-center justify-between px-12">
                <div>
                    <h2 className="text-3xl font-bold text-white">REFRACT</h2>
                </div>
                <ul className="w-56 hidden md:items-center md:justify-around md:flex ml-auto text-white">
                    <li>ONE</li>
                    <li>TWO</li>
                    <li>THREE</li>
                </ul>
                <button onClick={() => setOpen(!open)} className="text-orange-400 cursor-pointer flex items-center md:hidden z-40" type="button">
                    <Hamburger toggled={open} toggle={setOpen} />
                </button>
            </div>
            <div className="overflow-x-hidden absolute top-0 left-0 right-0">
                <div className={(open ? "z-30 flex translate-x-0 transition ease-out duration-500" : "translate-x-full transition ease-out duration-500")}>
                    <div className=" w-full h-screen bg-gray-100 text-black flex flex-col items-center justify-center">
                        <ul className="text-center font-bold text-4xl leading-loose">
                            <li>ONE</li>
                            <li>TWO</li>
                            <li>THREE</li>
                        </ul>
                    </div>    
                </div>
            </div>
    </>
    )
};
