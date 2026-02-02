import Link from'next/link'


export default function Nightmovers() {
  return (
    <>
        <section className="spacer container">
          
            <h2 className='px-5 text-blue-300 text-5xl md:text-8xl text-center'>The Night Movers Trailer</h2>
         
            <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'> The Night movers was my second short film, created during my time at university. It follows Billie, a young girl who longs for a different life in the wake of her parents’ divorce. When her wish comes true, she soon realises it comes at a cost. The film went on to win Best Film at my university, and I’m incredibly proud to have been the editor on the project.
            </p>
          
          <div className="flex flex-col items-center justify-center">
            <iframe src="https://www.youtube.com/embed/NiTs1nU5wCk?autoplay=0&mute=0&controls=1&showinfo=1&rel=0"
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

