import Link from'next/link'
import { Slide } from 'react-reveal'

export default function Acend() {
  return (
    <>
        <section className="spacer container">
            <Slide  down>
                <h2 className='px-5 text-blue-300 text-5xl md:text-8xl text-center'>Client Work</h2>
            </Slide>
            <Slide up>
            <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>In this section you will see all of my best client work. The popular gaming organisation
                Acend contacted me back in January of this year for me to be a part time video editor
                for 6 months.</p>
              <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>For me this was a big opportunity to showcase my skills and put into
                practice what I have learnt in the past 2 years of video editing whilst also gaining
                valuable experience being a freelance video editor working with a client.</p>     
            </Slide>
            <Slide up>
            <div className="text-center">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center mx-auto'>
                    <iframe src="https://www.youtube.com/embed/ShBbIcLbYv4?modestbranding=1&rel=0"
                        className="w-full h-96 mx-auto"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy">
                    </iframe>
                    <iframe src="https://www.youtube.com/embed/BjKJ0QtSkbQ?modestbranding=1&rel=0"
                        className="w-full h-96 mx-auto"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy">
                    </iframe>
                    <iframe src="https://www.youtube.com/embed/MGRQlwsOBWI?modestbranding=1&rel=0"
                        className="w-full h-96 mx-auto"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy">
                    </iframe>
                    <iframe src="https://www.youtube.com/embed/PX8nJccBJsM?modestbranding=1&rel=0"
                        className="w-full h-96 mx-auto"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy">
                    </iframe>
                    <iframe src="https://www.youtube.com/embed/1o0F80SSgEo?modestbranding=1&rel=0"
                        className="w-full h-96 mx-auto"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy">
                    </iframe>
                    <iframe src="https://www.youtube.com/embed/rMMk6ZZH2xM?modestbranding=1&rel=0"
                        className="w-full h-96 mx-auto"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy">
                    </iframe>
                    <iframe src="https://www.youtube.com/embed/9Dya0F20v14?modestbranding=1&rel=0"
                        className="w-full h-96 mx-auto"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy">
                    </iframe>
                    <iframe src="https://www.youtube.com/embed/B1vxjkbRRUc?modestbranding=1&rel=0"
                        className="w-full h-96 mx-auto"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy">
                    </iframe>
                    <iframe src="https://www.youtube.com/embed/eWPKzlUGzLg?modestbranding=1&rel=0"
                        className="w-full h-96 mx-auto"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy">
                    </iframe>
                    <iframe src="https://www.youtube.com/embed/9t3XZ5hz58Y?modestbranding=1&rel=0"
                        className="w-full h-96 mx-auto"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy">
                    </iframe>
                    <iframe src="https://www.youtube.com/embed/Sf4ohGviAZ8?modestbranding=1&rel=0"
                        className="w-full h-96 mx-auto"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy">
                    </iframe>
                </div>
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

