import React from 'react'
import img1 from '../../../images/event/img1.jpg'
import img2 from '../../../images/event/img2.jpg'
import img3 from '../../../images/event/img3.jpg'
import { SlCalender } from 'react-icons/sl'
import { FaLocationDot } from 'react-icons/fa6'

const UpCommingEvents = () => {
    return (
        <div className='lg:mx-32 my-20'>
            <div className='flex justify-center items-center'>
                <h1 className='text-3xl pb-2 border-b-2 border-[#0077b6]'>Upcomming Events</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-10'>
                <div>
                    <div className='w-full h-60'>
                        <img className='w-full h-full' src={img1} alt="" />
                    </div>
                    <div className='space-y-3 mt-3'>
                        <h1 className='text-2xl'>Tree Plantation Drive</h1>
                        <div className='flex items-center gap-3'>
                            <div className='text-[#4a4747] flex items-center gap-2'>
                                <SlCalender />
                                <p>15th April 2025</p>
                            </div>
                            <div className='text-[#4a4747] flex items-center gap-2'>
                                <FaLocationDot />
                                <p>City Park</p>
                            </div>
                        </div>
                        <p className='text-[#4a4747]'>Join us in planting trees to restore nature, combat climate change, and create a greener future!</p>
                        <div className='flex items-center gap-3'>
                            <button className='btn w-32 bg-none border-[#0077b6] text-[#0077b6]'>Join Now</button>
                            <button className='btn w-32 bg-none border-[#0077b6] text-[#0077b6]'>View Details</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-full h-60'>
                        <img className='w-full h-full' src={img2} alt="" />
                    </div>
                    <div className='space-y-3 mt-3'>
                        <h1 className='text-2xl'>Beach Clean-up Campaign </h1>
                        <div className='flex items-center gap-3'>
                            <div className='text-[#4a4747] flex items-center gap-2'>
                                <SlCalender />
                                <p>15th April 2025</p>
                            </div>
                            <div className='text-[#4a4747] flex items-center gap-2'>
                                <FaLocationDot />
                                <p>City Park</p>
                            </div>
                        </div>
                        <p className='text-[#4a4747]'>Help reduce waste, protect marine life, and keep our beaches clean to ensure a healthier planet for future generations!</p>
                        <div className='flex items-center gap-3'>
                            <button className='btn w-32 bg-none border-[#0077b6] text-[#0077b6]'>Join Now</button>
                            <button className='btn w-32 bg-none border-[#0077b6] text-[#0077b6]'>View Details</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-full h-60'>
                        <img className='w-full h-full' src={img3} alt="" />
                    </div>
                    <div className='space-y-3 mt-3'>
                        <h1 className='text-2xl'>Climate Awareness Rally</h1>
                        <div className='flex items-center gap-3'>
                            <div className='text-[#4a4747] flex items-center gap-2'>
                                <SlCalender />
                                <p>15th April 2025</p>
                            </div>
                            <div className='text-[#4a4747] flex items-center gap-2'>
                                <FaLocationDot />
                                <p>City Park</p>
                            </div>
                        </div>
                        <p className='text-[#4a4747]'>Raise your voice for climate action, spread awareness, inspire change for a sustainable future!</p>
                        <div className='flex items-center gap-3'>
                            <button className='btn w-32 bg-none border-[#0077b6] text-[#0077b6]'>Join Now</button>
                            <button className='btn w-32 bg-none border-[#0077b6] text-[#0077b6]'>View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpCommingEvents