import Image from 'next/image'

export default function Home() {
  return (
    <div>
<header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
    <Image src="/images/logo.svg" width={500} height={500} className="text-white z-50" />
  <div className="z-50 relative p-5 text-6xl font-black text-white">
    REFRACTVFX
  </div>
  <video
    autoPlay
    loop
    muted
    className="absolute z-1 w-auto min-w-full min-h-full max-w-none"
  >
    <source
      src="/images/video.mp4"
      type="video/mp4"
      autoplay
    />
    Your browser does not support the video tag.
  </video>
</header>
</div>
  )
}


