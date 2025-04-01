import React from 'react'
import img1 from '../../../images/donate/img1.jpg'
import img2 from '../../../images/donate/img2.jpg'
import img3 from '../../../images/donate/img3.avif'

const donatePage = () => {
    return (
        <div className='lg:mx-32 mx-3 my-20'>
            <div className='flex justify-center items-center'>
                <h1 className='text-3xl pb-2 border-b-2 border-[#0077b6]'>Support Our Cause</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-10'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='w-full h-60'>
                        <img className='w-full h-full' src={img1} alt="" />
                    </div>
                    <div className='space-y-2 mt-3'>
                        <h1 className='text-xl'>Environmental Protection</h1>
                        <p className='text-[15px] text-[#4a4747]'>Environmental Protection involves conserving nature, reducing pollution, and promoting sustainability to safeguard our planet.</p>
                        <div>
                            <progress className="progress progress-accent w-full" value="70" max="100"></progress>
                            <p className='text-[15px] text-[#4a4747]'>$50,300,00 donated of $80,000,00 goal</p>
                        </div>
                        <button className='btn w-32 bg-none border-[#0077b6] text-[#0077b6]'>Donate</button>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='w-full h-60'>
                        <img className='w-full h-full' src={img2} alt="" />
                    </div>
                    <div className='space-y-2 mt-3'>
                        <h1 className='text-xl'>Help to plant a tree</h1>
                        <p className='text-[15px] text-[#4a4747]'>Help plant a tree! Trees clean the air, fight climate change, and support nature. Let's grow a greener future together!</p>
                        <div>
                            <progress className="progress progress-accent w-full" value="70" max="100"></progress>
                            <p className='text-[15px] text-[#4a4747]'>$50,300,00 donated of $80,000,00 goal</p>
                        </div>
                        <button className='btn w-32 bg-none border-[#0077b6] text-[#0077b6]'>Donate</button>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='w-full h-60'>
                        <img className='w-full h-full' src={img3} alt="" />
                    </div>
                    <div className='space-y-2 mt-3'>
                        <h1 className='text-xl'>Cleaning Assistance</h1>
                        <p className='text-[15px] text-[#4a4747]'>Cleaning Assistance helps keep our surroundings clean, reduce waste, and protect the planet. Join us!</p>
                        <div>
                            <progress className="progress progress-accent w-full" value="70" max="100"></progress>
                            <p className='text-[15px] text-[#4a4747]'>$50,300,00 donated of $80,000,00 goal</p>
                        </div>
                        <button className='btn w-32 bg-none border-[#0077b6] text-[#0077b6]'>Donate</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default donatePage