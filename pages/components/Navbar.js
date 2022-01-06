import { useState} from 'react'


import Hamburger from 'hamburger-react'


export default function Navbar() {

    const [open, setOpen] = useState(false)

    return (
        <>
        <div className="w-full h-24 bg-gray-200 flex items-center justify-between px-12">
            <div>
                <h2 className="text-3xl font-bold">Title</h2>
            </div>
            <ul className="w-56 hidden md:items-center md:justify-around md:flex ml-auto">
                <li>ONE</li>
                <li>TWO</li>
                <li>THREE</li>
            </ul>
            <button onClick={() => setOpen(!open)} className="cursor-pointer flex items-center md:hidden z-40" type="button">
                <Hamburger toggled={open} toggle={setOpen} />
              </button>

        </div>
        <div className={(open ? "z-30 flex opacity-100 transition ease-in duration-400" : "flex opacity-0 transition ease-in duration-400")}>
        <div className="absolute inset-y-0 w-screen h-screen bg-gray-100 text-black flex flex-col items-center justify-center opacity-100">
            <ul className="text-center font-bold text-4xl">
                <li>ONE</li>
                <li>TWO</li>
                <li>THREE</li>
            </ul>
        </div>    
        </div>
    </>
    )
};
