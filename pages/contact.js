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
        
                <p className='text-black px-5 pt-6 md:w-3/4 mx-auto text-center'>Please get in touch to discuss anything.</p>
                <p className='text-black px-5 pb-6 md:w-3/4 mx-auto text-center'>Also, if you like my work, please give me a follow on social media.</p>
           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center'>
                <div className="flex flex-col items-center justify-center font-light bg-gray-900 text-white p-12 rounded-lg">
                <MdEmail size="6rem" className="mx-auto mb-4 text-blue-300 hover:animate-bounce" />
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
                    <a href='https://www.youtube.com/@refract44' className='text-2xl'>@refract44</a>
                </div>
                <div className="flex flex-col items-center font-light bg-gray-900 text-white p-12 rounded-lg">
                <FaTwitter size="6rem" className="mx-auto mb-4 text-blue-300" />
                    <h2 className='py-5 font-bold text-2xl'>Twitter</h2>
                    <a href='https://twitter.com/jack_attwater' className='text-2xl'>@jack_attwater</a>
                </div>
                <div className="flex flex-col items-center font-light bg-gray-900 text-white p-12 rounded-lg">
                <FaInstagram size="6rem" className="mx-auto mb-4 text-blue-300" />
                    <h2 className='py-5 font-bold text-2xl'>Instagram</h2>
                    <a href='https://www.instagram.com/jack_vfx21/' className='text-2xl'>jack_vfx21</a>
                </div>
                <div className="flex flex-col items-center font-light bg-gray-900 text-white p-12 rounded-lg">
                <FaTiktok size="6rem" className="mx-auto mb-4 text-blue-300" />
                    <h2 className='py-5 font-bold text-2xl'>TikTok</h2>
                    <a href='https://www.tiktok.com/@refractvfx' className='text-2xl'>refractvfx</a>
                </div>
            </div>
           
        </section>
    </div>
  )
}


