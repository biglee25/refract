import Image from 'next/image'
import Premier from '../public/images/Premiere_Pro_icon.svg'
import AfterEffects from '../public/images/After_Effects_icon.svg'
import Photoshop from '../public/images/Photoshop_icon.svg'
import Illustrator from '../public/images/Illustrator_icon.svg'


export default function Adobe() {
  return (
    <div>
        <section className="container mx-auto md:my-48">
            <div className='grid grid-cols-1 md:grid-cols-1'>
                <div className="flex flex-col justify-center text-center md:text-left font-light">
                    <h1 className='pb-5'>The Industry <span className='text-red-500'>Standard</span></h1>
                    <p>Adobe software is widely known to be the industry standard and the benchmark for all creative work.</p>
                    <br />
                    <p>I use the latest Adobe software to create mind blowing visualisations that capture the imagination. Using these tools your ideas become limitless.</p>
                </div>
                <div className='inline-grid grid-cols-2 gap-4 p-12'>
                        <Image
                            src={Premier}
                            alt="Premiere Pro"
                            layout="responsive"
                        />
                        <Image
                            src={AfterEffects}
                            alt="After Effects"
                            layout="responsive"
                        />
                        <Image
                            src={Photoshop}
                            alt="Photoshop"
                            layout="responsive"
                        />
                        <Image
                            src={Illustrator}
                            alt="Illustrator"
                            layout="responsive"
                        />
                </div>
            </div>
        </section>
    </div>
  )
}


