import Image from 'next/image'
import Premier from '../public/images/Premiere_Pro_icon.svg'
import AfterEffects from '../public/images/After_Effects_icon.svg'
import Photoshop from '../public/images/Photoshop_icon.svg'
import Illustrator from '../public/images/Illustrator_icon.svg'
import DaVinci from '../public/images/DaVinci.png'
import LogicPro from '../public/images/Logicpro-icon.png'


export default function Card() {
  return (
    <div>
        <section className="bg-gray-900 text-center">
            <div className='spacer container py-24'>
                
                    <h2 className='md:mt-12 md:w-3/4 mx-auto text-blue-300 text-5xl md:text-8xl'>My Skills</h2>
                
                
                    <p className='text-white pt-6 md:w-3/4 mx-auto'>During my time as a freelancer, I have gained valuable experience in various software applications.
                                                                    I have gained the majority of my experience through the Adobe software and I am able to use them
                                                                    to a high level. Alongside these I’m experienced in other applications like Davinci Resolve and
                                                                    Logic Pro.</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-24 md:px-24 md:py-24 text-left'>
                        <div className="flex flex-col items-start font-light bg-gray-100 p-12 rounded-lg">
                            <Image src={AfterEffects} alt="Adobe After Effects" width={100} height={100}/>
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
                            <Image src={Premier} alt="Adobe Premiere" width={100} height={100}/>
                            <h2 className='py-5 font-bold text-2xl'>Premier Pro</h2>
                            <p>Adobe Premiere Pro is used for editing videos, commercials and other film, television,
                                and online video. It also includes audio editing functionality.</p>
                                <br/>
                                <p>Premier Pro is an important
                                piece of software that I use to create my edits. I use it for many things such as cutting
                                and colour correction. Premier pro also plays a big part in editing audio in my edits.</p>
                        </div>
                        <div className="flex flex-col items-start font-light bg-gray-100 p-12 rounded-lg">
                            <Image src={Photoshop} alt="Adobe PhotoShop" width={100} height={100}/>
                            <h2 className='py-5 font-bold text-2xl'>Photoshop</h2>
                            <p>Adobe Photoshop is an image creation, graphic design and photo editing software
                                developed by Adobe. The software provides many image editing features for pixel-
                                based images, raster graphics and vector graphics.</p>
                                <br/>
                                <p>I have used photoshop previously to
                                create thumbnails for my edits and cover art for college projects.</p>
                        </div>
                         <div className="flex flex-col items-start font-light bg-gray-100 p-12 rounded-lg">
                            <Image src={Illustrator} alt="Adobe Illustrator" width={100} height={100}/>
                            <h2 className='py-5 font-bold text-2xl'>Illustrator</h2>
                            <p>Adobe Illustrator is a graphic design application. I use Illustrator to create vector
                                graphics.</p>
                                <br/>
                                <p>Vector images and graphics are made of points, lines, shapes, and curves
                                based on mathematical formulas rather than a set amount of pixels, and therefore can
                                be scaled up or down while maintaining image quality.</p>
                        </div>
                        <div className="flex flex-col items-start font-light bg-gray-100 p-12 rounded-lg">
                            <Image src={DaVinci} alt="Davinci Resolve" width={100} height={100}/>
                            <h2 className='py-5 font-bold text-2xl'>DaVinci Resolve</h2>
                            <p>DaVinci Resolve is a proprietary color grading, color correction, visual effects, and
                                audio post-production video editing application for macOS, Windows, and Linux, developed
                                by Australian company Blackmagic Design.
                                </p>
                                <br/>
                                <p>
                                It was originally developed by American company
                                Da Vinci Systems under the name da Vinci Resolve until 2009, when Blackmagic Design
                                acquired the company.</p>
                                <br/>
                        </div>
                        <div className="flex flex-col items-start font-light bg-gray-100 p-12 rounded-lg">
                            <Image src={LogicPro} alt="Logic Pro" width={100} height={100}/>
                            <h2 className='py-5 font-bold text-2xl'>LogicPro</h2>
                            <p>Logic Pro provides software instruments, audio effects and recording facilities for music synthesis.
                                It also supports Apple Loops – royalty-free, professionally recorded instrument loops.
                                Logic Pro and Express once shared many functions and the same interface.
                                </p>
                                <br/>
                                <p>
                                Logic Express was limited
                                to two-channel stereo mixdown, while Logic Pro can handle multichannel surround sound.
                                </p>
                        </div>
                    </div>                
            </div>
        </section>
    </div>
  )
}


