import Link from'next/link'

export default function Valorant() {
  return (
    <>
        <section className="spacer container">
        <h2 className='px-5 text-blue-300 text-5xl md:text-8xl text-center'>MP5: Valorant Montage</h2>
            <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>My valorant montages are always very popular amongst my viewers on youtube, these
              edits are fast paced like a normal montage and are simple but effective.</p>
              <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>I like to
              incorporate an effect called twixtor in these montages , twixtor is an effect that merges
              motion blur with time remapping. This allows for smooth slow motion clips that add
              some unique aspects to these montages and this one specifically. </p>

              <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>Also In this montage I
              showcased my own logo animation for the first time , incorporating 3d animation. I was

              able to take all the segments of my logo and create a smooth animation that looks eye
              catching and easily recognisable.</p>     
            <div className="flex flex-col items-center justify-center">
              <iframe src="https://www.youtube.com/embed/nmelL52HdDE?modestbranding=1&rel=0"
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

