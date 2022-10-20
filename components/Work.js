import Image from 'next/image'
import Premier from '../public/images/Premiere_Pro_icon.svg'
import AfterEffects from '../public/images/After_Effects_icon.svg'
import Photoshop from '../public/images/Photoshop_icon.svg'
import Illustrator from '../public/images/Illustrator_icon.svg'


export default function Card() {
  return (
    <div>
        <section className="m-4 md:mx-12 md:my-48">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className="flex flex-col items-center rounded-lg">
                <iframe src="https://www.youtube.com/embed/TLBjEi_bi0U"
                    className="w-full h-96 mx-auto"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullscreen
                    loading="lazy">
                </iframe>
                </div>
                <div className="flex flex-col items-center rounded-lg">
                <iframe src="https://www.youtube.com/embed/TLBjEi_bi0U"
                    className="w-full h-96 mx-auto"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullscreen
                    loading="lazy">
                </iframe>
                </div>
                <div className="flex flex-col items-center rounded-lg">
                <iframe src="https://www.youtube.com/embed/TLBjEi_bi0U"
                    className="w-full h-96 mx-auto"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullscreen
                    loading="lazy">
                </iframe>
                </div>
                <div className="flex flex-col items-center rounded-lg">
                <iframe src="https://www.youtube.com/embed/TLBjEi_bi0U"
                    className="w-full h-96 mx-auto"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullscreen
                    loading="lazy">
                </iframe>
                </div>
            </div>
        </section>
    </div>
  )
}

