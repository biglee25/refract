import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/images/video-edit.jpg'


export default function About() {
  return (
    <div>
        <section className="container mx-auto">
            <div className="my-12 md:my-48 px-5 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className='pb-4'>A little about me....</h2>
                    <p>My own personal venture into the world of post production has improved my skills and understanding of what it takes to produce an eye catching piece of work. I have been using applications like Adobe Premiere Pro and Adobe After Effects for over 2 years and have found them to have been crucial in my development in post production. Developing my skills through such outlets has helped me to grow a sense of perfectionism for the work I have created.</p>
                </div>
                <div>
                    <p>Working as a freelance video editor in my spare time shows I am committed and passionate for the post production industry and am always willing to know how I can better my work. I have used my criticism of post production to look at it as more of an art than a form of entertainment.
                        Freelance video editing helps me gain lots of professionalism and I always enjoy doing it as I would say it is one of my hobbies. During the past 2 years of video editing I have worked with a number of different clients who have always been impressed with the work I have done for them. Some clients I have worked with have been kind enough to give me working references for future opportunities that may come my way.
                    </p>
                </div>
            </div>
        </section>
    </div>
  )
}


