import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/images/profile.png'

export default function Home() {
  return (
    <div>
        <section className='grid grid-cols-1 md:grid-cols-2 mt-12 md:mt-12 bg-black bg-hero-bg bg-contain bg-no-repeat bg-top-right md:bg-right h-screen'>
						<div className='flex flex-col items-center justify-center p-4'>
							<div className='text-left mx-auto'>
								<h2 className='text-blue-300 font-extralight text-8xl md:text-9xl mb-24'>PORTFOLIO</h2>
								<h2 className='text-white text-5xl md:text-8xl'>JACK ATTWATER</h2>
								<h1 className='text-black font-extralight bg-blue-300 p-8 mt-24 w-max'>VIDEO EDITOR</h1>
							</div>
						</div>
        </section>
	</div>
  )
}
