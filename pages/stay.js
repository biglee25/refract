import Link from'next/link'

export default function Stay() {
  return (
    <>
        <section className="spacer container">
        <h2 className='px-5 text-blue-300 text-5xl md:text-8xl text-center'>Stay</h2>
            <p className='text-black px-5 py-6 md:w-3/4 mx-auto text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className="flex flex-col items-center justify-center">
                <iframe src="https://www.youtube.com/embed/gxNW92OQ0Dw?modestbranding=1&rel=0"
                    className="w-full h-96 mx-auto"
                    frameBorder="0"
                    controls="0"
                    rel="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture modestbranding allowFullscreen"
                    
                    loading="lazy">
                </iframe>
                </div>
        </section>
        <section className="spacer container">
      <div className="m-4 logo-bg text-black">
              <div className="my-12 px-5 grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <p>I&apos;m Jack Attwater, I am a level 3 media student at clarendon sixth form college. I am also a freelance video editor for the organisation Acend.</p>
                    <br/> 
                    <p>My passion for editing started 2 years ago when I was studying Media at school. It then came to me that I would like to do video editing as I had seen what other people had done and was intrigued to learn more.</p>
                    <br/>
                    <p>Video editing was always something that I had done in my spare time so I had an idea that it was my real passion.
                        My best skills are editing and post production. I feel it is my strong point as my technical skills are very advanced due to the extracurricular work I do outside of college time. There are still lots of things I can work on but I feel this is my strongest skill. When it comes to pre-production I feel organisation is my strongest skill as I like to keep everything in a place where I can access it easily.</p>
                    <br/>
                    <p>Alongside my college work I am a freelance video editor which I have been doing for about 10 months. Recently i have been working for the organisation Acend , this is one of the biggest esports companies in the industry at the moment and the continue to support me and my ambitions and give me as much opportunities as they can so that i can be a as successful as possible. My aspirations as a video editor/media practitioner is to work for a big tv production company such as sky sports or become a full time freelance video editor who is well known within the industry.</p>
                    <br/>
                  </div>
                  <div>
                  <p>In terms of my work ethic I would say I am always motivated to do as much as possible with the best quality I can possibly give, as a freelance video editor quality is the key factor I take into consideration when I finish an edit.</p>
                  <br/>
                  <p>With my good work ethic I am able to always plan my deadlines for customers and college projects so I never miss the required deadline.
                      I am always motivated to do my best in what I do and try to add my own spin on my edits which leads to unique ideas and satisfied customers.
                  </p>
                  <br/>
                  <p>Working as a freelance video editor in my spare time shows I am committed and passionate for the post production industry and am always willing to know how I can better my work. I have used my criticism of post production to look at it as more of an art than a form of entertainment. Freelance video editing helps me gain lots of professionalism and I always enjoy doing it as I would say it is one of my hobbies.</p>
                  <br/>
                  <p> During the past 2 years of video editing I have worked with a number of different clients who have always been impressed with the work I have done for them. Some clients I have worked with have been kind enough to give me working references for future opportunities that may come my way.</p>
                  </div>
              </div>
        </div>
      </section>
      <Link href="/work">
        <a>
            <div className="button">Back to Projects</div>
        </a>
      </Link>
    </>
  )
}

