import Image from 'next/image'
import Premier from '../public/images/Premiere_Pro_icon.svg'
import AfterEffects from '../public/images/After_Effects_icon.svg'
import Photoshop from '../public/images/Photoshop_icon.svg'
import Illustrator from '../public/images/Illustrator_icon.svg'


export default function Adobe() {
  return (
    <div>
        <section className="container mx-auto md:my-48">
                <div className="flex flex-col justify-center items-center text-center font-light">
                    <h1>Utilising The Latest <span className='text-red-500'>Technologies</span> In Motion Graphics</h1>
                
                </div>
                <div className="my-12 px-5 grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
                    <div>
                        <Image
                            src={Premier}
                            alt="Premiere Pro"
                            width={200}
                            height={200}
                            layout="fixed"
                        />
                    </div>
                    <div>
                        <Image
                            src={AfterEffects}
                            alt="After Effects"
                            width={200}
                            height={200}
                            layout="fixed"
                        />
                    </div>
                    <div>
                        <Image
                            src={Photoshop}
                            alt="Photoshop"
                            width={200}
                            height={200}
                            layout="fixed"
                        />
                    </div>
                    <div>
                        <Image
                            src={Illustrator}
                            alt="Illustrator"
                            width={200}
                            height={200}
                            layout="fixed"
                        />
                    </div>
            </div>
        </section>
    </div>
  )
}


