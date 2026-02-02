import Link from'next/link'


export default function Refract() {
  return (
    <>
        <section className="spacer container">
          
            <h2 className='px-5 text-blue-300 text-5xl md:text-8xl text-center'>Refract VFX Animation:</h2>
         
            <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>I designed the Refract logo around the idea of breaking through and seeing things differently. The lightning bolt represents energy, creativity, and impact, while the circle keeps it clean and focused. The black and white style keeps it bold, modern, and timeless — exactly how I want the brand to feel.</p>
          
          <div className="flex flex-col items-center justify-center">
            <iframe src="https://www.youtube.com/embed/D-zVOQBVKBw?autoplay=0&mute=0&controls=1&showinfo=1&rel=0"
                className="w-full h-96 mx-auto"
                frameBorder="0"
                controls="0"
                rel="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture modestbranding allowFullscreen"
                loading="lazy">
            </iframe>
          </div>
          
        </section>
        <Link href="/work">
          <a>
              <div className="button">Back to Projects</div>
          </a>
        </Link>
    </>
  )
}

