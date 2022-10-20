import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/images/profile.png'

export default function Home() {
  return (
    <div>
        <section className='grid grid-cols-1 md:grid-cols-2 mt-12 bg-black bg-hero-bg bg-contain bg-no-repeat bg-right h-screen'>
                <div className='flex flex-col items-start justify-center p-4'>
                        <h2 className='text-white font-extralight mb-24'>PORTFOLIO</h2>
                        <div>
<<<<<<< HEAD
                        <h2 className='text-white'>JACK ATTWATER</h2>
                        <h1 className='text-black font-extralight bg-red-500 p-4 mt-8 w-max'>VIDEO EDITOR</h1>
=======
                        <h2 className='text-white text-center'>JACK ATTWATER</h2>
                        <h1 className='text-black font-extralight bg-red-500 p-4 mt-8 w-max'>VFX EDITOR</h1>
>>>>>>> b7dbfeddc86ceb14ecfb10a809dd0d56d156d438
                        </div>
                </div>
        </section>
</div>
  )
}
