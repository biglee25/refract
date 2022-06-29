import Link from 'next/Link'
import Image from 'next/image'
import logo from '../public/images/logo.svg'

export default function Home() {
  return (
    <div>
<header className="relative flex flex-col items-center justify-center h-screen mb-12 overflow-hidden">
    <div>
    <Image
            src={logo}
            alt="Refract VFX"
            width={700}
            height={520}
            layout="fixed"
            className='text-white z-30 animate-pulse opacity-20'
            />
    </div>
    <div className="relative flex items-center justify-center p-5 text-6xl font-black text-white z-30">
            REFRACT<span className='text-red-500'>VFX</span>
    </div>

    <div className="px-5 text-center text-1xl font-light text-white z-30 md:w-1/2">
            Delivering perfectly crafted video edits that will make you stand out from the crowd and get you noticed.
            <Link href="/about">
                    <a>
                <div className='button bg-red-500 mx-auto'>Find Out More</div>
                </a>
           </Link>

    </div>
    <video
        autoPlay
        loop
        muted
        className="absolute w-auto min-w-full min-h-full max-w-none"
    >
    <source
    src="/images/video.mp4"
    type="video/mp4"
    autoPlay
    />
    </video>
</header>
</div>
  )
}


