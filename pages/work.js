import Link from "next/link"


export default function Work() {
  return (
    <>
        <section className="spacer container text-center">
            
                <h2 className='px-5 text-gray-900 text-5xl md:text-8xl text-center'>My Work</h2>
            
                <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>In this section you will see all of my best client work. The popular gaming organisation Acend contacted me back in January of 2022 for me to be a part time video editor for 6 months.
                    For me this was a big opportunity to showcase my skills and put into practice what I have learnt in the past 5 years of video editing whilst also gaining valuable experience being a freelance video editor working with a client.</p>
                <br/>
                <p className="pb-12">Please click on the images to see the full brief and video.</p>
          
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-left'>
                 <div className="flex flex-col items-center cursor-pointer">
                    <Link href="/rugerfjord" passHref legacyBehavior>
                         <div className="bg-rugerfjord-bg bg-no-repeat bg-cover bg-center text-white w-full h-96 flex items-start justify-start p-5">
                             <a>
                                 <h2 className="text-2xl text-black bg-blue-300 p-3">Ruger Fjord</h2>
                             </a>
                         </div>
                    </Link>
                </div>
                 <div className="flex flex-col items-center cursor-pointer">
                    <Link href="/darts" passHref legacyBehavior>
                         <div className="bg-darts-bg bg-no-repeat bg-cover bg-center text-white w-full h-96 flex items-start justify-start p-5">
                             <a>
                                 <h2 className="text-2xl text-black bg-blue-300 p-3">Dan Coates Darts</h2>
                             </a>
                         </div>
                    </Link>
                </div>
                 <div className="flex flex-col items-center cursor-pointer">
                    <Link href="/hopespromo" passHref legacyBehavior>
                         <div className="bg-hopesanddreams-bg bg-no-repeat bg-cover bg-center text-white w-full h-96 flex items-start justify-start p-5">
                             <a>
                                 <h2 className="text-2xl text-black bg-blue-300 p-3">Hopes and Dreams Promo</h2>
                             </a>
                         </div>
                    </Link>
                </div>
                 <div className="flex flex-col items-center cursor-pointer">
                    <Link href="/liveevents" passHref legacyBehavior>
                            <div className="bg-events-bg bg-no-repeat bg-cover bg-center text-white w-full h-96 flex items-start justify-start p-5">
                                <a>
                                    <h2 className="text-2xl text-black bg-blue-300 p-3">Live Events Reel</h2>
                                </a>
                            </div>
                    </Link>
                </div>
                 <div className="flex flex-col items-center cursor-pointer">
                    <Link href="/hopesanddreams" passHref legacyBehavior>
                         <div className="bg-hopesanddreams-bg bg-no-repeat bg-cover bg-center text-white w-full h-96 flex items-start justify-start p-5">
                             <a>
                                 <h2 className="text-2xl text-black bg-blue-300 p-3">Hopes & Dreams</h2>
                             </a>
                         </div>
                    </Link>
                </div>
                 <div className="flex flex-col items-center cursor-pointer">
                    <Link href="/vfxreel" passHref legacyBehavior>
                            <div className="bg-vfx-bg bg-no-repeat bg-cover bg-center text-white w-full h-96 flex items-start justify-start p-5">
                                <a>
                                    <h2 className="text-2xl text-black bg-blue-300 p-3">VFX Reel</h2>
                                </a>
                            </div>
                    </Link>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <Link href="/nightmovers" passHref legacyBehavior>
                        <div className="bg-nightmovers-bg bg-no-repeat bg-cover bg-center text-white w-full h-96 flex items-start justify-start p-5">
                            <a>
                                <h2 className="text-2xl text-black bg-blue-300 p-3">The Night Movers Trailer</h2>
                            </a>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <Link href="/luckystrike" passHref legacyBehavior>
                        <div className="bg-luckystrike-bg bg-no-repeat bg-cover bg-center text-white w-full h-96 flex items-start justify-start p-5">
                            <a>
                                <h2 className="text-2xl text-black bg-blue-300 p-3">Lucky Strike Trailer</h2>
                            </a>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <Link href="/adidas" passHref legacyBehavior>
                        <div className="bg-adidas-bg bg-no-repeat bg-cover bg-center text-white w-full h-96 flex items-start justify-start p-5">
                            <a>
                                <h2 className="text-2xl text-black bg-blue-300 p-3">Adidas Motion Graphic</h2>
                            </a>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <Link href="/nike" passHref legacyBehavior>
                        <div className="bg-nike-bg bg-no-repeat bg-cover bg-center text-white w-full h-96 flex items-start justify-start p-5">
                            <a>
                                <h2 className="text-2xl text-black bg-blue-300 p-3">Nike Motion Graphic</h2>
                            </a>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <Link href="/refract" passHref legacyBehavior>
                        <div className="bg-refract-bg bg-no-repeat bg-cover bg-center text-white w-full h-96 flex items-start justify-start p-5">
                            <a>
                                <h2 className="text-2xl text-black bg-blue-300 p-3">Refract VFX Animation</h2>
                            </a>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-center cursor-pointer mt-4">
                    <Link href="/acend" passHref legacyBehavior>
                            <div className="bg-client-bg bg-no-repeat bg-cover bg-center text-white w-full h-96 flex items-start justify-start p-5">
                                <a>
                                    <h2 className="text-2xl text-black bg-blue-300 p-3">Client Work</h2>
                                </a>
                            </div>
                    </Link>
                </div>
        </section>
    </>
  )
}

