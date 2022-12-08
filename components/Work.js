import { Slide } from "react-reveal";


export default function Work() {
  return (
    <div>
        <section className="spacer container text-center">
            <Slide down>
                <h2 className='md:mt-12 md:w-3/4 mx-auto text-blue-300 text-5xl md:text-8xl'>My Recent Work</h2>
            </Slide>
            <Slide up>
            <p className='text-black py-6 md:w-3/4 mx-auto'>Below you will find a small selection of the recent work I have completed. You will find more on my work page.</p>
            </Slide>
            <Slide up>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center mx-auto'>
                <iframe src="https://www.youtube.com/embed/0ea0rilWKnA?modestbranding=1&rel=0"
                    className="w-full h-96 mx-auto"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy">
                </iframe>
                <iframe src="https://www.youtube.com/embed/_dnMeWuMbDQ?modestbranding=1&rel=0"
                    className="w-full h-96 mx-auto"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy">
                </iframe>
                <iframe src="https://www.youtube.com/embed/-9USS-YxQHI?modestbranding=1&rel=0"
                    className="w-full h-96 mx-auto"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy">
                </iframe>
                <iframe src="https://www.youtube.com/embed/gxNW92OQ0Dw?modestbranding=1&rel=0"
                    className="w-full h-96 mx-auto"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy">
                </iframe>
            </div>

            </Slide>
        </section>
    </div>
  )
}

