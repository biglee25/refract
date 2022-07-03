
import Image from 'next/image'
import { FaPhoneSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaFacebookSquare } from 'react-icons/fa';

import logo from "../public/images/logo.svg"


export default function Footer() {
  return (
    <footer className="bg-black">
        <div className="py-28 flex flex-col items-center">
          <div className="py-4">
          <a href="tel:07478 876632" className="text-white">
            <FaPhoneSquare size="2rem" className="mx-auto mb-4 text-red-500" />
            07478 876632</a> 
          </div>
          <div className="py-4">
          <a href="mailto:jackattwater21@gmail.com" className="text-white">
            <MdEmail size="2rem" className="mx-auto mb-4 text-red-500" />
            jackattwater21@gmail.com</a>
          </div>
          <div className="py-4">
          <a href="https://www.facebook.com/refract" target="_blank" rel="noreferrer" className="text-white">
            <FaFacebookSquare size="2rem" className="mx-auto mb-4 text-red-500" />
            Refract</a>
          </div>
          <div className="py-6">
            <Image
                src={logo}
                alt="Refract VFX"
                width={125}
                height={80}
                layout="fixed"
                />
          </div>
          <h3 className="text-2xl font-light text-center mb-5 text-white">
          © {new Date().getFullYear()} Refract.com
          </h3>

        </div>
    </footer>
  )
}
