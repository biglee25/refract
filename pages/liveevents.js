import Link from'next/link'


export default function Liveevents() {
  return (
    <>
        <section className="spacer container">
          
            <h2 className='px-5 text-blue-300 text-5xl md:text-8xl text-center'>Live Events Reel</h2>
         
            <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>In my third year at university we created a live broadcast setup filming the third year songwriting and performance students. The setup consisted of seven cameras.</p>
            <p className='text-black px-5 pb-6 md:w-3/4 mx-auto text-center'>During this production I explored a number of roles from camera operating, directing and vision mixing, this reel consists of the best clips from the day of 2UBE Xtra that I directed whilst vision mixing.</p>
            
            
            
          
          <div className="flex flex-col items-center justify-center">
            <iframe src="https://www.youtube.com/embed/deWgIHzAqQ4?autoplay=0&mute=0&controls=1&showinfo=1&rel=0"
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

