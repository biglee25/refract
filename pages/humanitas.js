import Link from'next/link'

export default function Stay() {
  return (
    <>
        <section className="spacer container">
        <h2 className='px-5 text-blue-300 text-5xl md:text-8xl text-center'>Humanitas Podcast: Final Major Project</h2>
            <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>Humanitas Podcast talks about humanity as a whole taking the good things and bad
              things about us as humans and seeing how we can better ourselves</p>
              <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>With this project I
                  wanted to create a multi camera project that would challenge my editing skills, cutting
                  between 3 cameras was a difficult task as everyone had to be talking in sync with the
                  audio which was recorded separately, this gave me the opportunity to use techniques
                  such as nesting and disabling layer inside Premiere Pro. Using these techniques I was
                  able to create a smooth workflow for myself and create a successful multi camera
                  project.</p>     
            <div className="flex flex-col items-center justify-center">
              <iframe src="https://www.youtube.com/embed/01k1PO54SDQ?modestbranding=1&rel=0"
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

