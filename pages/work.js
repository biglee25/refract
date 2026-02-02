import Link from "next/link"


export default function Work() {
  return (
    <>
        <section className="spacer container text-center">
            
                <h2 className='px-5 text-blue-300 text-5xl md:text-8xl text-center'>My Work</h2>
            
                <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>In this section you will see all of my best client work. The popular gaming organisation Acend contacted me back in January of 2022 for me to be a part time video editor for 6 months.

For me this was a big opportunity to showcase my skills and put into practice what I have learnt in the past 5 years of video editing whilst also gaining valuable experience being a freelance video editor working with a client.

</p>
                <br/>
                <p className="pb-12">Please click on the images to see the full brief and video.</p>
          
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-left'>
                <div className="flex flex-col items-center cursor-pointer">
                    <Link href="/adidas">
                        <div className="bg-adidas-bg bg-no-repeat bg-cover bg-center text-white w-full h-96 flex items-start justify-start p-5">
                            <a>
                                <h2 className="text-2xl text-black bg-blue-300 p-3">Adidas Motion Graphic</h2>
                            </a>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <Link href="/nike">
                        <div className="bg-nike-bg bg-no-repeat bg-cover bg-center text-white w-full h-96 flex items-start justify-start p-5">
                            <a>
                                <h2 className="text-2xl text-black bg-blue-300 p-3">Nike Motion Graphic</h2>
                            </a>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <Link href="/refractvfx">
                        <div className="bg-refractvfx-bg bg-no-repeat bg-cover bg-center text-white w-full h-96 flex items-start justify-start p-5">
                            <a>
                                <h2 className="text-2xl text-black bg-blue-300 p-3">Refract VFX Animation</h2>
                            </a>
                        </div>
                    </Link>
                </div>

                {/* <div className="flex flex-col items-center cursor-pointer">
                    <Link href="/fight-for-promotion">
                        <div className="bg-ffp-bg bg-no-repeat bg-cover bg-center text-black w-full h-96 flex items-start justify-start p-5">
                            <a>
                                <h2 className="text-2xl text-black bg-blue-300 p-3">Fight For Promotion</h2>
                            </a>
                        </div>
                    </Link>
                </div> */}
                {/* <div className="flex flex-col items-center cursor-pointer">
                    <Link href="/stay">
                            <div className="bg-stay-bg bg-no-repeat bg-cover bg-center text-black w-full h-96 flex items-start justify-start p-5">
                                <a>
                                    <h2 className="text-2xl text-black bg-blue-300 p-3">Stay Music Video</h2>
                                </a>
                            </div>
                    </Link>
                </div> */}
                {/* <div className="flex flex-col items-center cursor-pointer">
                    <Link href="/sissi">
                            <div className="bg-sissi-bg bg-no-repeat bg-cover bg-center text-white w-full h-96 flex items-start justify-start p-5">
                                <a>
                                    <h2 className="text-2xl text-black bg-blue-300 p-3">Sissi State Punks CSGO announcement</h2>
                                </a>
                            </div>
                    </Link>
                </div> */}
                {/* <div className="flex flex-col items-center cursor-pointer">
                    <Link href="/edgar">
                            <div className="bg-edgar-bg bg-no-repeat bg-cover bg-center text-white w-full h-96 flex items-start justify-start p-5">
                                <a>
                                    <h2 className="text-2xl text-black bg-blue-300 p-3">Bend It like Edgar Montage</h2>
                                </a>
                            </div>
                    </Link>
                </div> */}
                {/* <div className="flex flex-col items-center cursor-pointer">
                    <Link href="/humanitas">
                            <div className="bg-humanitas-bg bg-no-repeat bg-cover bg-center text-white w-full h-96 flex items-start justify-start p-5">
                                <a>
                                    <h2 className="text-2xl text-black bg-blue-300 p-3">Humanitas Podcast Final Major Project</h2>
                                </a>
                            </div>
                    </Link>
                </div> */}
                <div className="flex flex-col items-center cursor-pointer">
                    <Link href="/staycod">
                            <div className="bg-staycod-bg bg-no-repeat bg-cover bg-center text-white w-full h-96 flex items-start justify-start p-5">
                                <a>
                                    <h2 className="text-2xl text-black bg-blue-300 p-3">Stay Call Of Duty Montage</h2>
                                </a>
                            </div>
                    </Link>
                </div>
                {/* <div className="flex flex-col items-center cursor-pointer">
                    <Link href="/valorant">
                            <div className="bg-valorant-bg bg-no-repeat bg-cover bg-center text-white w-full h-96 flex items-start justify-start p-5">
                                <a>
                                    <h2 className="text-2xl text-black bg-blue-300 p-3">MP5 Valorant Montage</h2>
                                </a>
                            </div>
                    </Link>
                </div> */}
                <div className="flex flex-col items-center cursor-pointer">
                    <Link href="/acend">
                            <div className="bg-client-bg bg-no-repeat bg-cover bg-center text-white w-full h-96 flex items-start justify-start p-5">
                                <a>
                                    <h2 className="text-2xl text-black bg-blue-300 p-3">Client Work</h2>
                                </a>
                            </div>
                    </Link>
                </div>
            </div>
            
        </section>
    </>
  )
}

