import Link from'next/link'


export default function Refractvfx() {
  return (
    <>
        <section className="spacer container">
          
            <h2 className='px-5 text-blue-300 text-5xl md:text-8xl text-center'>Refract VFX Animation:</h2>
         
            {/* <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>The Nike logo is one of the most recognizable and iconic logos in the world. The simple
                  yet powerful design has been a part of Nike&#39;s identity since 1971, and it has been used
                  in countless advertising campaigns and product designs over the years.</p>
                  <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>The Nike logo
                  animation is a short video that brings the iconic logo to life, showcasing its energy and
                  dynamism.</p>
            <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>The animation is a great way to bring new life to the familiar logo, and it can
                  be used in a variety of contexts to create an impactful visual experience.</p> */}
          
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

