import Link from'next/link'


export default function Sissi() {
  return (
    <>
        <section className="spacer container">
       
            <h2 className='px-5 text-blue-300 text-5xl md:text-8xl text-center'>Sissi State Punks: CSGO Announcement</h2>
          
          <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>One of my past clients Sissi State Punks had requested an announcement video for
                  there new esports team for CSGO.</p>
            <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>This video is a story of the manager of Sissi State
                Punks recruiting each player at different locations around a german island, at the end of
                the video i added a montage style edit to showcase each players past gameplay to
                introduce them to the fans.
            </p>     
          
          <div className="flex flex-col items-center justify-center">
              <iframe src="https://www.youtube.com/embed/A7BRE_zwUN0?modestbranding=1&rel=0"
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

