import Link from'next/link'

export default function FFP() {
  return (
    <>
        <section className="spacer container">
        <h2 className='px-5 text-blue-300 text-5xl md:text-8xl text-center'>Fight For Promotion: Short Film</h2>
            <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>Fight For Promotion is a short film about two championship managers who are fighting it
              out on the last day of the season to win promotion for their team.The 2 managers have
              lots of funny interactions with each other which gives the film a comedic feel.</p>
              <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>The
              original idea for this film is based on the hit tv show ted lasso and aims to provide a
              somewhat similar comedic feel.</p>
                <div className="flex flex-col items-center justify-center">
                <iframe src="https://www.youtube.com/embed/-9USS-YxQHI?modestbranding=1&rel=0"
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

