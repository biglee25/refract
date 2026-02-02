import Link from'next/link'


export default function Luckystrike() {
  return (
    <>
        <section className="spacer container">
          
            <h2 className='px-5 text-blue-300 text-5xl md:text-8xl text-center'>Lucky Strike Trailer</h2>
         
            <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>Lucky Strike was my debut short film, created during my time at university. It tells the story of two long-lost friends who are unexpectedly reunited under difficult circumstances. The film went on to win Best Debut Film at my university, marking a major milestone in my development as a film editor.</p>
          
          <div className="flex flex-col items-center justify-center">
            <iframe src="https://www.youtube.com/embed/h0AXVhz0tdE?autoplay=0&mute=0&controls=1&showinfo=1&rel=0"
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

