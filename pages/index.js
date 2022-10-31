import Head from 'next/head'

import Hero from '../components/Hero'
import About from '../components/About'
import Card from '../components/Card'
import Work from '../components/Work'
import Footer from '../components/Footer'

// const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

// export async function getServerSideProps() {
//   const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=4&playlistId=PLdQPJkxOG01pHhCG2NlazMqCSiW_95ytj&key=${process.env.YOUTUBE_API_KEY}`)
//   const data = await res.json();
//   return {
//     props: {
//       data
//     }
//   }
// }

export default function Home({ data }) {

  return (
    <>
      <Head>
        <title>Portfolio | Jack Attwater</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Card />
      <Work />
      <Footer />  
    </>
  )
}