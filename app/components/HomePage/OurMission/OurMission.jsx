import React from 'react'
import img1 from '../../../images/about/img1.jpg'
import img2 from '../../../images/about/img2.jpg'

const OurMission = () => {
    return (
        <div className='lg:mx-32 mx-3 my-10 flex flex-col lg:flex-row justify-between items-center gap-3'>
            <div className='lg:w-[60%]'>
                <img className='w-full rounded-2xl' src={img1} alt="" />
            </div>
            <div className='lg:w-[60%] space-y-3'>
                <h1 className='text-2xl uppercase'>Our Mission & Vision</h1>
                <h3 className='text-[#4a4747] text-[15px]'>Our goal is to create a cleaner, greener, and more sustainable world where nature and humanity coexist in harmony. We are committed to environmental conservation through large-scale tree planting, efficient waste management, and impactful awareness programs to restore nature’s balance and reduce environmental degradation. Our mission is to take effective actions against climate change by promoting eco-friendly practices, advocating for sustainable policies, and encouraging community participation. Through education, innovation, and collective efforts, we aim to build a healthier planet for present and future generations.</h3>
                <button className='btn bg-[#0077b6] text-white'>Learn More</button>
            </div>
        </div>
    )
}

export default OurMission