import Link from 'next/Link'
import Image from 'next/image'
import logo from '../public/images/video-edit.jpg'


export default function About() {
  return (
    <div>
        <section className="container mx-auto">
            <div className="my-12 px-5 grid md:grid-cols-2 gap-4">
                <div className="flex flex-col justify-center font-light">
                    <h1>Perfect<span className='text-red-500'> Edits.</span></h1>
                    <h1 className='pb-5'>Expertly Delivered.</h1>
                    <p>All my video edits are created using the latest Adobe After Effects and Adobe Premiere Pro to create seamless videos for any platform.</p>
                    <Link href="/work">
                      <div className='button bg-black'>View Work</div>
                    </Link>
                </div>
                <div className='flex flex-col justify-center relative shadow-lg'>
                  <Image
                    src={logo}
                    alt="Refract VFX"
                    layout="fill"
                  />
                </div>
            </div>
        </section>
    </div>
  )
}


