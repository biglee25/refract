import Link from'next/link'
import { Slide } from 'react-reveal'

export default function Adidas() {
  return (
    <>
        <section className="spacer container">
          <Slide  down>
            <h2 className='px-5 text-blue-300 text-5xl md:text-8xl text-center'>Adidas Motion Graphic</h2>
          </Slide>
          <Slide up>
          <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>The adidas logo is one of the most iconic and instantly recognizable logos in the world.
                The three stripes that make up the logo are also one of the most widely recognized
                symbols in the world. The adidas logo has been through many iterations over the years,
                but it has always kept its core elements intact.
          </p>
          <p className='text-black md:px-5 pb-6 md:w-3/4 mx-auto text-center'>The latest version of the logo features a
            more modern take on the classic three stripes, with a gradient effect that gives it a more
            dynamic look. The adidas logo animation is a perfect example of how this iconic brand
            continues to evolve while still staying true to its roots.
          </p>
          </Slide>
          <Slide up>
          <div className="flex flex-col items-center justify-center">
                <iframe src="https://www.youtube.com/embed/0ea0rilWKnA?modestbranding=1&rel=0"
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

