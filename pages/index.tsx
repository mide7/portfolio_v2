import type { NextPage } from 'next'

import Clients from '../components/Clients'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import RecentWorks from '../components/RecentWorks'
import Testimonials from '../components/Testimonials'

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <RecentWorks />
      <Clients />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home
