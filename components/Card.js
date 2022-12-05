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
                    <p>Adobe After Effects is the industry standard for motion graphics and visual effects
                        allowing users to create sophisticated and visually compelling video.</p>
                        <br/>
                        <p>After
                        Effects allows you to create cinematic movie titles, intros and transitions. After effects
                        plays a big part in the work I create as I use lots of visual effects and time remapping in
                        my edits.</p>
                </div>
                <div className="flex flex-col items-start font-light bg-gray-100 p-12 rounded-lg">
                    <Image src={Premier} alt="After Effects" width={100} height={100}/>
                    <h2 className='py-5 font-bold text-2xl'>Premier Pro</h2>
                    <p>Adobe Premiere Pro is used for editing videos, commercials and other film, television,
                        and online video. It also includes audio editing functionality.</p>
                        <br/>
                        <p>Premier Pro is an important
                        piece of software that I use to create my edits. I use it for many things such as cutting
                        and colour correction. Premier pro also plays a big part in editing audio in my edits.</p>
                </div>
                <div className="flex flex-col items-start font-light bg-gray-100 p-12 rounded-lg">
                    <Image src={Photoshop} alt="After Effects" width={100} height={100}/>
                    <h2 className='py-5 font-bold text-2xl'>Photoshop</h2>
                    <p>Adobe Photoshop is an image creation, graphic design and photo editing software
                        developed by Adobe. The software provides many image editing features for pixel-
                        based images, raster graphics and vector graphics.</p>
                        <br/>
                        <p>I have used photoshop previously to
                        create thumbnails for my edits and cover art for college projects.</p>
                </div>
                <div className="flex flex-col items-start font-light bg-gray-100 p-12 rounded-lg">
                    <Image src={Illustrator} alt="After Effects" width={100} height={100}/>
                    <h2 className='py-5 font-bold text-2xl'>Illustrator</h2>
                    <p>Adobe Illustrator is a graphic design application. I use Illustrator to create vector
                        graphics.</p>
                        <br/>
                        <p>Vector images and graphics are made of points, lines, shapes, and curves
                        based on mathematical formulas rather than a set amount of pixels, and therefore can
                        be scaled up or down while maintaining image quality.</p>
                </div>
            </div>
        </section>
    </div>
  )
}


