import React from 'react'
import Banner from '../components/HomePage/Banner/Banner'
import OurPriorites from '../components/HomePage/Banner/OurPriorites/OurPriorites'
import OurMission from '../components/HomePage/OurMission/OurMission'

const homePage = () => {
  return (
    <div className=''>
      <Banner />
      <OurMission />
      <OurPriorites />
    </div>
  )
}

export default homePage