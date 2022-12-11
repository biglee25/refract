import Link from'next/link'
import { Slide } from 'react-reveal'

export default function Staycod() {
  return (
    <>
        <section className="spacer container">
          <Slide down>
            <h2 className='px-5 text-blue-300 text-5xl md:text-8xl text-center'>Stay: Call Of Duty Montage</h2>
          </Slide>
          <Slide up>
          <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>In this Montage I was able to showcase my progress with time remapping, analysing
              other editors&#39; project files and incorporating techniques I had learnt from them in my
              own work helped me to make this montage flow really well.</p>
          <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'> In this montage I was also
            able to experiment with motion tracked 3d text with the help of the after effects plugin 3d
            element. I feel like this project turned out really well and is still one of my favourites.
          </p>     
          </Slide>
          <Slide up>
          <div className="flex flex-col items-center justify-center">
              <iframe src="https://www.youtube.com/embed/ckR9Dlcdp7M?modestbranding=1&rel=0"
                  className="w-full h-96 mx-auto"
                  frameBorder="0"
                  controls="0"
                  rel="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture modestbranding allowFullscreen"
                  loading="lazy">
              </iframe>
            </div>
          </Slide>
        </section>
      <Link href="/work">
        <a>
            <div className="button">Back to Projects</div>
        </a>
      </Link>
    </>
  )
}

