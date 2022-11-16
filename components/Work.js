

export default function Card() {
  return (
    <div>
        <section className="m-4 md:mx-12 md:my-48">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className="flex flex-col items-center rounded-lg">
                <iframe src="https://www.youtube.com/embed/0ea0rilWKnA?modestbranding=1&rel=0"
                    className="w-full h-96 mx-auto"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy">
                </iframe>
                </div>
                <div className="flex flex-col items-center rounded-lg">
                <iframe src="https://www.youtube.com/embed/_dnMeWuMbDQ?modestbranding=1&rel=0"
                    className="w-full h-96 mx-auto"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy">
                </iframe>
                </div>
                <div className="flex flex-col items-center rounded-lg">
                <iframe src="https://www.youtube.com/embed/-9USS-YxQHI?modestbranding=1&rel=0"
                    className="w-full h-96 mx-auto"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy">
                </iframe>
                </div>
                <div className="flex flex-col items-center rounded-lg">
                <iframe src="https://www.youtube.com/embed/gxNW92OQ0Dw?modestbranding=1&rel=0"
                    className="w-full h-96 mx-auto"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy">
                </iframe>
                </div>
            </div>
        </section>
    </div>
  )
}

