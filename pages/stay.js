import Link from'next/link'

export default function Stay() {
  return (
    <>
        <section className="spacer container">
        <h2 className='px-5 text-blue-300 text-5xl md:text-8xl text-center'>Stay: Music Video</h2>
            <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>The lyric video I created for the song &quot;STAY&quot; by the kid Laroi and Justin bieber is a
                simple but effective way to bring the lyrics of the song to life.</p>

              <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>The text animation is clean
                and easy to follow, while the calm mise en scene provides a nice backdrop for the
                visuals.</p>     
            <div className="flex flex-col items-center justify-center">
              <iframe src="https://www.youtube.com/embed/gxNW92OQ0Dw?modestbranding=1&rel=0"
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

