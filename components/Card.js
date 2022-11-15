import Image from 'next/image'
import Premier from '../public/images/Premiere_Pro_icon.svg'
import AfterEffects from '../public/images/After_Effects_icon.svg'
import Photoshop from '../public/images/Photoshop_icon.svg'
import Illustrator from '../public/images/Illustrator_icon.svg'


export default function Card() {
  return (
    <div>
        <section className="spacer bg-gray-900">
            <h2 className='pt-24 md:mt-12 md:w-3/4 mx-auto text-blue-300 text-5xl md:text-8xl'>My Skills</h2>
            <p className='text-white pt-6 md:w-3/4 mx-auto'>My own personal venture into the world of post production has improved my skills and understanding of what it takes to produce an eye catching piece of work[c] that is unique and appeals to a certain target audience.I have been using applications like Adobe Premiere Pro and Adobe After Effects for over 2 years and have found them to have been crucial in my development in video editing.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-24 md:px-24 md:py-48'>
                <div className="flex flex-col items-start font-light bg-gray-100 p-12 rounded-lg">
                    <Image src={AfterEffects} alt="After Effects" width={100} height={100}/>
                    <h2 className='py-5 font-bold text-2xl'>After Effects</h2>
                    <p>Adobe software is widely known to be the industry standard and the benchmark for all creative work.</p>
                    <p>I use the latest Adobe software to create mind blowing visualisations that capture the imagination. Using these tools your ideas become limitless.</p>
                </div>
                <div className="flex flex-col items-start font-light bg-gray-100 p-12 rounded-lg">
                    <Image src={Premier} alt="After Effects" width={100} height={100}/>
                    <h2 className='py-5 font-bold text-2xl'>Premier Pro</h2>
                    <p>Adobe software is widely known to be the industry standard and the benchmark for all creative work.</p>
                    <p>I use the latest Adobe software to create mind blowing visualisations that capture the imagination. Using these tools your ideas become limitless.</p>
                </div>
                <div className="flex flex-col items-start font-light bg-gray-100 p-12 rounded-lg">
                    <Image src={Photoshop} alt="After Effects" width={100} height={100}/>
                    <h2 className='py-5 font-bold text-2xl'>Photoshop</h2>
                    <p>Adobe software is widely known to be the industry standard and the benchmark for all creative work.</p>
                    <p>I use the latest Adobe software to create mind blowing visualisations that capture the imagination. Using these tools your ideas become limitless.</p>
                </div>
                <div className="flex flex-col items-start font-light bg-gray-100 p-12 rounded-lg">
                    <Image src={Illustrator} alt="After Effects" width={100} height={100}/>
                    <h2 className='py-5 font-bold text-2xl'>Illustrator</h2>
                    <p>Adobe software is widely known to be the industry standard and the benchmark for all creative work.</p>
                    <p>I use the latest Adobe software to create mind blowing visualisations that capture the imagination. Using these tools your ideas become limitless.</p>
                </div>
            </div>
        </section>
    </div>
  )
}


