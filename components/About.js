import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/images/video-edit.jpg'


export default function About() {
  return (
    <div>
        <section className="container mx-auto background-left">
            <div className="my-12 px-5 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col justify-center text-center md:text-left font-light order-1 md:order-2">
                    <h1>Perfect<span className='text-red-500'> Edits.</span></h1>
                    <h1 className='pb-5'>Expertly Delivered.</h1>
                    <p>All my video edits are created using the latest Adobe After Effects and Adobe Premiere Pro to create seamless videos for any platform.</p>
                    <Link href="/work">
                      <a>
                        <div className='button bg-black'>View Work</div>
                      </a>
                    </Link>
                </div>
                <div className='flex flex-col justify-center'>
                  <Image
                    src={logo}
                    alt="Refract VFX"
                    layout="responsive"
                  />
                </div>
            </div>
        </section>
    </div>
  )
}


