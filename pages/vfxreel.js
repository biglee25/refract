import Link from'next/link'


export default function vfxreel() {
  return (
    <>
        <section className="spacer container">
          
            <h2 className='px-5 text-blue-300 text-5xl md:text-8xl text-center'>VFX Reel</h2>
         
            <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>This is my VFX Reel primarily created using Adobe After Effects, Fusion (DaVinci Resolve) and Boris Fx suite.</p>
            <p className='text-black px-5 pb-6 md:w-3/4 mx-auto text-center'> Using these tools I’ve have created VFX clips that showcase a number of my skills such as green screen keying, planar tracking and compositing.</p>
            
            
            
          
          <div className="flex flex-col items-center justify-center">
            <iframe src="https://www.youtube.com/embed/Adp7sMUj-Os?autoplay=0&mute=0&controls=1&showinfo=1&rel=0"
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

