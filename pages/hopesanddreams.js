import Link from'next/link'


export default function Hopesanddreams() {
  return (
    <>
        <section className="spacer container">
          
            <h2 className='px-5 text-blue-300 text-5xl md:text-8xl text-center'>Hopes & Dreams - Highlights</h2>
         
            <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>Is the University System broken? 



Our new documentary - Hopes and Dreams - aims to explore this question. 



A question that rages in the headlines, but with little input from students and those directly effected. It&aposs just statistics, numbers on a page. 



Our documentary aims to change this - and give voice to the stories of those effected by University - in both good ways and bad.</p>
          
          <div className="flex flex-col items-center justify-center">
            <iframe src="https://www.youtube.com/embed/9mjW-_mdBIE?autoplay=0&mute=0&controls=1&showinfo=1&rel=0"
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

