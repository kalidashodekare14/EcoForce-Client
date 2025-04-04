import React, { useEffect, useState } from 'react'
import './FascinatingFacts.css'
import { AiOutlineGlobal } from 'react-icons/ai'
import { FaUserPlus, FaUsers } from 'react-icons/fa'
import { IoRocket } from 'react-icons/io5'
import CountUp from 'react-countup';

const FascinatingFacts = () => {

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted){
        return null;
    }

    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 lg:px-32 bgImage  h-52  bg-no-repeat bg-center bg-cover my-10 '>
            <div className='flex flex-col justify-center items-center gap-2 text-white'>
                <AiOutlineGlobal className='text-4xl' />
                <p className='text-2xl'>
                    <CountUp delay={2} end={10} />
                </p>
                <h1 className='text-[18px]'>Gloabal Work</h1>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 text-white'>
                <FaUsers className='text-4xl' />
                <p className='text-2xl'>
                    <CountUp delay={2} end={2000} />
                </p>
                <h1 className='text-[18px]'>Donate to Support </h1>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 text-white'>
                <IoRocket className='text-4xl' />
                <p className='text-2xl'>
                    <CountUp delay={2} end={1500} />
                </p>
                <h1 className='text-[18px]'>Success Mission</h1>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 text-white'>
                <FaUserPlus className='text-4xl' />
                <p className='text-2xl'>
                    <CountUp delay={2} end={3000} /></p>
                <h1 className='text-[18px]'>Become a Volunteer </h1>
            </div>
        </div>
    )
}

export default FascinatingFacts