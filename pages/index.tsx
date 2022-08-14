import type { NextPage } from 'next'
import Head from 'next/head'
import AboutUs from '../components/Landing/AboutUs'
import SlideBar from '../components/Landing/FixedComponents/SlideMenu'
import Hero from '../components/Landing/Hero'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MetaMath</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SlideBar />
      <Hero />
      <AboutUs />
    </>
  )
}

export default Home
