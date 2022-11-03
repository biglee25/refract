import { MdEmail } from 'react-icons/md';
import { FaPhoneSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';


export default function Card() {
  return (
    <div>
        <section className="spacer container">
            <h2 className='px-5 text-blue-300 text-5xl md:text-8xl text-center'>Contact Me</h2>
            <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>Please get in touch to discuss anything.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center'>
                <div className="flex flex-col items-center justify-center font-light bg-gray-900 text-white p-12 rounded-lg">
                <MdEmail size="6rem" className="mx-auto mb-4 text-blue-300" />
                    <h2 className='py-5 font-bold text-2xl'>Email</h2>
                    <a href='mailto:jackattwater21@gmail.com' className='text-2xl'>jackattwater21@gmail</a>
                </div>
                <div className="flex flex-col items-center justify-center font-light bg-gray-900 text-white p-12 rounded-lg">
                <FaPhoneSquare size="6rem" className="mx-auto mb-4 text-blue-300" />
                    <h2 className='py-5 font-bold text-2xl'>Mobile</h2>
                    <a href='tel:07478 876632' className='text-2xl'>07478 876632</a>
                </div>
                <div className="flex flex-col items-center font-light bg-gray-900 text-white p-12 rounded-lg">
                <FaYoutube size="6rem" className="mx-auto mb-4 text-blue-300" />
                    <h2 className='py-5 font-bold text-2xl'>Youtube</h2>
                    <p>Adobe software is widely known to be the industry standard and the benchmark for all creative work.</p>
                </div>
                <div className="flex flex-col items-center font-light bg-gray-900 text-white p-12 rounded-lg">
                <FaTwitter size="6rem" className="mx-auto mb-4 text-blue-300" />
                    <h2 className='py-5 font-bold text-2xl'>Twitter</h2>
                    <p>Adobe software is widely known to be the industry standard and the benchmark for all creative work.</p>
                </div>
                <div className="flex flex-col items-center font-light bg-gray-900 text-white p-12 rounded-lg">
                <FaInstagram size="6rem" className="mx-auto mb-4 text-blue-300" />
                    <h2 className='py-5 font-bold text-2xl'>Instagram</h2>
                    <p>Adobe software is widely known to be the industry standard and the benchmark for all creative work.</p>
                </div>
                <div className="flex flex-col items-center font-light bg-gray-900 text-white p-12 rounded-lg">
                <FaTiktok size="6rem" className="mx-auto mb-4 text-blue-300" />
                    <h2 className='py-5 font-bold text-2xl'>TikTok</h2>
                    <p>Adobe software is widely known to be the industry standard and the benchmark for all creative work.</p>
                </div>
            </div>
        </section>
    </div>
  )
}


