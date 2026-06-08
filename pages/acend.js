import Link from'next/link'


export default function Acend() {
  return (
    <>
        <section className="spacer container">
            
                <h2 className='px-5 text-blue-300 text-5xl md:text-8xl text-center'>Client Work</h2>
           
            <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>In this section you will see all of my best client work. I worked for the popular gaming organisation Acend in January 2021 to produce highlight videos for their many esports teams.</p>
              <p className='text-black px-5 pb-6 md:w-3/4 mx-auto text-center'>My role consisted of cutting down longer form live streams and selecting their best moments to create highlights reels, while keeping up with current editing trends to keep viewers engaged.</p>     
            
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
            
        </section>

      <Link href="/work">
        <a>
            <div className="button">Back to Projects</div>
        </a>
      </Link>
    </>
  )
}

