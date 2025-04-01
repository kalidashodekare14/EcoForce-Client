import React, { useEffect, useState } from 'react'
import img1 from '../../../images/about/img1.jpg'
import { AiOutlineGlobal } from 'react-icons/ai'
import { FaUserPlus, FaUsers } from 'react-icons/fa'
import { IoRocket } from 'react-icons/io5'
import CountUp from 'react-countup';
import './AboutInfo.css'
import { Link } from 'react-router'

const AboutInfo = () => {

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null;
    }

    return (
        <div className=''>
            <div className='lg:px-32 bg-[#f7f7f7] p-5 flex flex-col lg:flex-row justify-between items-center'>
                <h1 className='text-xl'>About Us</h1>
                <div className='flex items-center gap-3'>
                    <Link to={'/'}>
                        <span className='hover:text-[#0077b6] duration-300'>Home</span>
                    </Link>
                    <span>/</span>
                    <span>About Us</span>
                </div>
            </div>
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
            <div className='grid grid-cols-2 lg:grid-cols-4 lg:px-32 bgImage  h-72  bg-no-repeat bg-center bg-cover my-10'>
                <div className='flex flex-col justify-center items-center gap-2 text-white'>
                    <AiOutlineGlobal className='text-5xl' />
                    <p className='text-3xl'>
                        <CountUp delay={2} end={10} />
                    </p>
                    <h1 className='text-xl'>Gloabal Work</h1>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 text-white'>
                    <FaUsers className='text-5xl' />
                    <p className='text-3xl'>
                        <CountUp delay={2} end={2000} />
                    </p>
                    <h1 className='text-xl'>Donate to Support </h1>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 text-white'>
                    <IoRocket className='text-5xl' />
                    <p className='text-3xl'>
                        <CountUp delay={2} end={1500} />
                    </p>
                    <h1 className='text-xl'>Success Mission</h1>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 text-white'>
                    <FaUserPlus className='text-5xl' />
                    <p className='text-3xl'>
                        <CountUp delay={2} end={3000} /></p>
                    <h1 className='text-xl'>Become a Volunteer </h1>
                </div>
            </div>
        </div>
    )
}

export default AboutInfo