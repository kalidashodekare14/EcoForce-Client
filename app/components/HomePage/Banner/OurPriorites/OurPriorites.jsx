import React from 'react'
import './OurPriorites.css'
import img1 from '../../../../images/our_prioties/img1.png'
import img2 from '../../../../images/our_prioties/img2.png'
import img3 from '../../../../images/our_prioties/img3.png'
import img4 from '../../../../images/our_prioties/img4.png'

const OurPriorites = () => {
  return (
    <div className='my-10 lg:mx-32 mx-3'>
      <div className='flex justify-center items-center'>
        <h1 className='text-3xl pb-2 border-b-2 border-[#0077b6]'>Our Priorites</h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 my-10'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <img className='w-20 h-20' src={img1} alt="" />
          <h1 className='text-xl'>Tree Plantation</h1>
          <p className='text-center text-[#4a4747] text-[15px]'>Promoting afforestation to improve air quality and restore ecosystems.</p>
          <button className='btn bg-[#0077b6] text-white'>Read More</button>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <img className='w-20 h-20' src={img2} alt="" />
          <h1 className='text-xl'>Waste Management</h1>
          <p className='text-center text-[#4a4747] text-[15px]'>Encouraging recycling and proper waste disposal to reduce pollution.</p>
          <button className='btn bg-[#0077b6] text-white'>Read More</button>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <img className='w-20 h-20' src={img3} alt="" />
          <h1 className='text-xl'>Climate Action</h1>
          <p className='text-center text-[#4a4747] text-[15px]'>Taking steps to combat climate change and promote sustainability.</p>
          <button className='btn bg-[#0077b6] text-white'>Read More</button>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <img className='w-20 h-20' src={img4} alt="" />
          <h1 className='text-xl'>Sustainable Living</h1>
          <p className='text-center text-[#4a4747] text-[15px]'>Advocating eco-friendly habits for a healthier planet.</p>
          <button className='btn bg-[#0077b6] text-white'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default OurPriorites