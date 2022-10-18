import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/images/profile.png'

export default function Home() {
  return (
    <div>
        <section className='grid grid-cols-1 md:grid-cols-2 mt-12 bg-black '>
                <div className='flex flex-col items-center justify-around p-4'>
                        <h2 className='text-white font-extralight mb-24'>PORTFOLIO</h2>
                        <div>
                        <h2 className='text-white'>JACK ATTWATER</h2>
                        <h1 className='text-black font-extralight bg-red-500 p-4 mt-8 w-max'>VFX EDITOR</h1>
                        </div>
                </div>
                <div className='bg-red-500'>
                        <Image src={logo} alt="Jack Attwater" layout="responsive" className='grayscale'/>
                </div>
        </section>
</div>
  )
}


