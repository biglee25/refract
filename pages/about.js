
import Link from 'next/link'
import { Slide } from 'react-reveal'


export default function Home() {

  return (
    <>
        <section className='grid grid-cols-1 md:grid-cols-2 mt-12 md:mt-12 bg-gray-900 bg-jack-bg bg-cover md:bg-contain bg-no-repeat bg-center md:bg-top-right md:bg-right h-screen'>
						<div className='flex flex-col items-center justify-center p-4 md:p-12'>
							<div className='text-left mx-auto'>
                <Slide down>
                  <h2 className='text-blue-300 text-5xl md:text-8xl'>ABOUT ME</h2>
                  </Slide>
                  <Slide up>
                  <p className='text-white pt-6'>I&apos;m Jack Attwater, I am a level 3 media student at Clarendon Sixth Form College.</p>
                  <br/>
                  <p className='text-white'>I am also a freelance video editor.</p>
                  </Slide>
							</div>
						</div>
        </section>
        <section className="spacer container">
      <div className="m-4 text-black">
        <Slide down>
          <h2 className='text-blue-300 text-5xl md:text-8xl'>My story so far....</h2>
        </Slide>
        <Slide up>
        <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p>I think the most interesting thing about post production for me is the freedom of creativity. The
                way post production can transform video is fascinating. The ability to manipulate video into
                anything you want has captivated me. My own personal venture into the world of post
                production has improved my skills and understanding of what it takes to produce an eye
                catching piece of work. I have been using software like Adobe Premiere Pro and Adobe After
                Effects for over 2 years and have found them to have been crucial in my development in post
                production. Developing my skills through such outlets has helped me to grow a sense of
                perfectionism for the work I have created.Working as a freelance video editor in my spare time
                shows I am committed and passionate for the post production industry and am always willing to
                know how I can better my work,through this I have been able to fully understand the subject in
                depth and have learnt valuable skills that will be required of me in this industry.</p>
            <br/>
            <p>During my time at college I have learnt a lot studying media. I have learnt a range of camera
                techniques that have been helpful with succeeding in assessed work. College has also helped
                me progress with my post production skills, receiving feedback from teachers and peers has
                helped me to identify what areas I need to improve on and has been crucial for my progression.
                Throughout my time at college my progression has been prominent and I have been able to act
                on mistakes I have made in past projects. I feel taking Media at college will be of great benefit to
                my studies at university as it has given me the foundation to better my work further and become
                successful in the post production industry.</p>
                <br/>
                <p>Throughout the past 2 years of video editing I have worked with a number of different clients who have always been impressed with the work I have done for them. Some clients I have worked with have been kind enough to give me working references for future opportunities that may come my way.</p>
          </div>
          <div>
            <p>The Industry of Digital media and post production has a wide range of job opportunities available. Through my Freelance journey it has made me realise what I could shape my career to be.</p>
            <br/>
            <p>Working with a popular gaming organisation Acend opened my eyes to
                this. The Head of the creative team at Acend, Daan Driessen, said that I have “ A Great work
                ethic and Professionalism” During my time at there, my job required me to be knowledgeable
                about current trends as well as having a good understanding of various editing tools such as
                Adobe Premier Pro and Adobe After Effects. Both Daan and I feel I fulfilled these requirements
                perfectly and was able to use these skills to produce work of the required standard. During my
                time working for them, I was able to gain other skills such as communication and
                professionalism, this was required of me during team meetings with other members of staff. I
                feel this profession as a whole moulds well with my future goals in post production.</p>
                <br/>
          <div>
            <p>My part time work as a Digital technician requires the ability to deal with a variety of different
                scenarios at one time. Other skills required of me are to work well as a part of a team, be
                confident in suggesting new ideas on how to better the company and workflow and to have a
                good knowledge of technical equipment such as machines and computers. These skills are
                something that can be translated over to my college work as working with a client and
                understanding their needs is something that is required in the post production Industry.</p>
            <br/>
            <p>Overall, I believe the skills I have learnt through my freelance work, college and part time work
                will help me prosper while at university. I believe that studying post production will give me great
                opportunities to thrive at any career in the digital media industry or other related areas that I
                may decide to pursue.
            </p>
          </div>
          </div>
      </div>
        </Slide>
        </div>
      </section>
      <Link href="/work">
        <a>
            <div className="button">My Projects</div>
        </a>
      </Link>

    </>
  )
}
