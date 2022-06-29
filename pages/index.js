import Head from 'next/head'

import Hero from '../components/Hero'
import About from '../components/About'

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=4&playlistId=PLdQPJkxOG01pHhCG2NlazMqCSiW_95ytj&key=${process.env.YOUTUBE_API_KEY}`)
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

export default function Home({ data }) {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <div className="container mx-auto">
        <h1 className="text-center text-6xl font-bold py-12 text-black mx-auto">
          Featured Work
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">

          {data.items.map(({ id, snippet = {} }) => {
                const { title, thumbnails = {}, resourceId = {} } = snippet;
                const { medium = {} } = thumbnails;
                return (
              <div key={id} className="m-4 p-4 shadow-md h-full rounded-lg bg-gray-900 text-white z-30">
                <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`} target="_blank" rel="noreferrer">
                    <img width={medium.width} height={medium.height} src={medium.url} alt="Youtube Image" className="w-full" />
                    <h3 className="text-center pt-8">{ title }</h3>
                </a>
              </div>
          )})}
        </div>
      </div>
    </>
  )
}