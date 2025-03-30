import React from 'react'
import './OurPriorites.css'
import img1 from '../../../../images/our_prioties/img1.png'
import img2 from '../../../../images/our_prioties/img2.jpg'
import img3 from '../../../../images/our_prioties/img3.jpg'
import img4 from '../../../../images/our_prioties/img4.jpg'
import img5 from '../../../../images/our_prioties/img5.jpg'

const OurPriorites = () => {
  return (
    <div className='my-10 lg:mx-32'>
      <h1 className='text-3xl border-b-2 border-[#0077b6] w-48 m-auto'>Our Priorites</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10'>
        <div className='relative lg:w-72 mx-2  h-52 flex flex-col justify-center items-center'>
          <img className='w-full h-full' src={img1} alt="" />
          <div className='absolute bottom-0 bg-[#000000b4] p-3'>
            <h1 className='text-white'>Tree Plantation & Afforestation</h1>
          </div>
        </div>
        <div className='relative lg:w-72 mx-2 h-52 flex flex-col justify-center items-center'>
          <img className='w-full h-full' src={img2} alt="" />
          <div className='absolute bottom-0 bg-[#000000b4] p-3'>
            <h1 className='text-white'>Waste Management & Recycling</h1>
          </div>
        </div>
        <div className='relative lg:w-72 mx-2 h-52 flex flex-col justify-center items-center'>
          <img className='w-full h-full' src={img3} alt="" />
          <div className='absolute bottom-0 bg-[#000000b4] p-3 '>
            <h1 className='text-white'>Beach & Public Area Cleaning</h1>
          </div>
        </div>
        <div className='relative lg:w-72 mx-2 h-52 flex flex-col justify-center items-center'>
          <img className='w-full h-full' src={img3} alt="" />
          <div className='absolute bottom-0 bg-[#000000b4] p-3 '>
            <h1 className='text-white'>Beach & Public Area Cleaning</h1>
          </div>
        </div>
        <div className='relative lg:w-72 mx-2 h-52 flex flex-col justify-center items-center'>
          <img className='w-full h-full' src={img4} alt="" />
          <div className='absolute bottom-0 bg-[#000000b4] p-3 '>
            <h1 className='text-white'>Clean Water & Air Initiative</h1>
          </div>
        </div>
        <div className='relative lg:w-72 mx-2 h-52 flex flex-col justify-center items-center'>
          <img className='w-full h-full' src={img5} alt="" />
          <div className='absolute bottom-0 bg-[#000000b4] p-3 '>
            <h1 className='text-white'>Community Engagement for a Greener Future</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurPriorites