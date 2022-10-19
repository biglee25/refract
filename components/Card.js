import Image from 'next/image'
import Premier from '../public/images/Premiere_Pro_icon.svg'
import AfterEffects from '../public/images/After_Effects_icon.svg'
import Photoshop from '../public/images/Photoshop_icon.svg'
import Illustrator from '../public/images/Illustrator_icon.svg'


export default function Card() {
  return (
    <div>
        <section className="m-4 md:mx-12 md:my-48">
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
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


