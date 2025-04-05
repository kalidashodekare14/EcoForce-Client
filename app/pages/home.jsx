import React from 'react'
import Banner from '../components/HomePage/Banner/Banner'
import OurPriorites from '../components/HomePage/Banner/OurPriorites/OurPriorites'
import OurMission from '../components/HomePage/OurMission/OurMission'
import FascinatingFacts from '../components/HomePage/FascinatingFacts/FascinatingFacts'
import OurTeam from '../components/HomePage/OurTeam/OurTeam'
import Donate from '../components/HomePage/Donate/Donate'
import UpCommingEvents from '../components/HomePage/UpCommingEvents/UpCommingEvents'
import useAuth from '../hooks/useAuth/useAuth'

const homePage = () => {


  return (
    <div className=''>
      <Banner />
      <OurMission />
      <OurPriorites />
      <Donate />
      <UpCommingEvents />
      <FascinatingFacts />
      <OurTeam />
    </div>
  )
}

export default homePage