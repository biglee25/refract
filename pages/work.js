import Link from "next/link"

export default function Work() {
  return (
    <>
        <section className="spacer container">
        <h2 className='px-5 text-blue-300 text-5xl md:text-8xl text-center'>My Work</h2>
            <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>Below you will find examples of my work. Please click on a video to see the full brief.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className="flex flex-col items-center rounded-lg cursor-pointer">
                    <Link href="/adidas">
                        <div className="bg-adidas-bg bg-no-repeat bg-cover bg-center opacity-100 hover:opacity-80 text-white w-full h-96 flex items-start justify-start p-5">
                            <a>
                                <h2>Adidas Motion Graphic</h2>
                            </a>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col items-center rounded-lg cursor-pointer">
                    <Link href="/nike">
                        <div className="bg-nike-bg bg-no-repeat bg-cover bg-center opacity-100 hover:opacity-80 text-white w-full h-96 flex items-start justify-start p-5">
                            <a>
                                <h2>Nike Motion Graphic</h2>
                            </a>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col items-center rounded-lg cursor-pointer">
                    <Link href="/fight-for-promotion">
                        <div className="bg-ffp-bg bg-no-repeat bg-cover bg-center opacity-100 hover:opacity-80 text-black w-full h-96 flex items-start justify-start p-5">
                            <a>
                                <h2>Fight For Promotion</h2>
                            </a>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col items-center rounded-lg cursor-pointer">
                <Link href="/stay">
                        <div className="bg-stay-bg bg-no-repeat bg-cover bg-center opacity-100 hover:opacity-80 text-black w-full h-96 flex items-start justify-start p-5">
                            <a>
                                <h2>STAY</h2>
                            </a>
                        </div>
                </Link>
            </div>
            </div>
        </section>
    </>
  )
}

