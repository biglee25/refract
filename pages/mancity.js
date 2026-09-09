import Link from'next/link'


export default function mancity() {
  return (
    <>
        <section className="spacer container">
          
            <h2 className='px-5 text-blue-300 text-5xl md:text-8xl text-center py-6'>Manchester City FC Promo</h2>
         
            {/* <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>Is the University System broken? Our new documentary ‘Hopes and Dreams’, aims to explore this question. A question that rages in the headlines, but with little input from students and those directly affected,  It’s just statistics, numbers on a page.</p>
            <p className='text-black px-5 pb-6 md:w-3/4 mx-auto text-center'> Our documentary aims to change this and give a voice to the stories of those affected by University. In a balanced, objective documentary that sheds light on the positive and negative perceptions, experiences, and consequences of University.</p> */}
            
            
            
          
          <div className="flex flex-col items-center justify-center">
            <iframe src="https://www.youtube.com/embed/K4FPMawfgsw?autoplay=0&mute=0&controls=1&showinfo=1&rel=0"
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

