import { Slide } from "react-reveal";

export default function Home() {
  return (
    <div>
        <section className='grid grid-cols-1 md:grid-cols-2 mt-12 md:mt-12 bg-gray-900 bg-hero-bg bg-contain bg-no-repeat bg-top-right md:bg-right h-screen'>
			<div className='flex flex-col items-center justify-center p-4 md:p-12'>
				<div className='text-left mx-auto'>
					<Slide top>
						<h2 className='text-white font-extralight text-6xl md:text-9xl mb-12'>PORTFOLIO</h2>
					</Slide>
					<Slide left>
						<h2 className='text-white text-5xl md:text-8xl'>JACK ATTWATER</h2>
					</Slide>
					<Slide bottom>
						<h1 className='text-black font-extralight bg-blue-300 p-8 mt-12 w-max'>VIDEO EDITOR</h1>
					</Slide>
				</div>
			</div>
		</section>
</div>
  )
}
