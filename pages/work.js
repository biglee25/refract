

export default function Card() {
  return (
    <>
        <section className="spacer container">
        <h2 className='px-5 text-blue-300 text-5xl md:text-8xl text-center'>My Work</h2>
            <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>Please get in touch to discuss anything.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className="flex flex-col items-center rounded-lg">
                <iframe src="https://www.youtube.com/embed/0ea0rilWKnA"
                    className="w-full h-96 mx-auto"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy">
                </iframe>
                </div>
                <div className="flex flex-col items-center rounded-lg">
                <iframe src="https://www.youtube.com/embed/_dnMeWuMbDQ"
                    className="w-full h-96 mx-auto"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy">
                </iframe>
                </div>
                <div className="flex flex-col items-center rounded-lg">
                <iframe src="https://www.youtube.com/embed/-9USS-YxQHI"
                    className="w-full h-96 mx-auto"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy">
                </iframe>
                </div>
                <div className="flex flex-col items-center rounded-lg">
                <iframe src="https://www.youtube.com/embed/gxNW92OQ0Dw"
                    className="w-full h-96 mx-auto"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy">
                </iframe>
                </div>
            </div>
        </section>
    </>
  )
}

