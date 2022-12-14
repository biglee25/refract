
import Image from 'next/image'
import { FaPhoneSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa';

import logo from "../public/images/logo.svg"


export default function Footer() {
  return (
    <footer className="bg-black">
        <div className="py-28 flex flex-col md:flex-row items-center justify-center">
          <div className="py-4 px-12">
          <a href="tel:07478 876632" target="_blank" rel="noreferrer"  className="text-white">
            <FaPhoneSquare size="4rem" className="mx-auto mb-4 text-blue-300" />
            07478 876632</a> 
          </div>
          <div className="py-4 px-12">
          <a href="mailto:jackattwater21@gmail.com" target="_blank" rel="noreferrer" className="text-white">
            <MdEmail size="4rem" className="mx-auto mb-4 text-blue-300" />
            jackattwater21@gmail.com</a>
          </div>
          <div className="py-4 px-12">
          <a href="https://www.behance.net/jackattwater" target="_blank" rel="noreferrer" className="text-white">
            <FaBehance size="4rem" className="mx-auto mb-4 text-blue-300" />
            jackattwater</a>
          </div>
        </div>
        <div className="py-6 text-center">
            <Image
                src={logo}
                alt="Refract VFX"
                width={125}
                height={80}
                layout="fixed"
                />
          </div>
        <h3 className="text-2xl font-light text-center pb-5 text-white">
          © {new Date().getFullYear()} Refract.com
          </h3>
    </footer>
  )
}
