import Link from'next/link'


export default function Edgar() {
  return (
    <>
        <section className="spacer container">
          
            <h2 className='px-5 text-blue-300 text-5xl md:text-8xl text-center'>Bend It like Edgar Montage</h2>
          
          <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>As a college end of year activity we were tasked to create an edgar wright style
              montage, as someone who has a lot of experience working with the montage style of
              video i was excited to see what i could create , I decided to go with a football concept as
              it is easy to create a fast paced montage that is easy to sync with the beat.</p>
              <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>The drone
                shots in the montage gave me a lot of opportunity for tracking shots and establishing
                shots. With this montage in particular I added a lot of effects such as the hologram of
                the music player. Overall I am happy with the outcome of the project as it was a good
                way to showcase my editing skills.</p>     
          
          <div className="flex flex-col items-center justify-center">
              <iframe src="https://www.youtube.com/embed/y94je44oF3Y?modestbranding=1&rel=0"
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

