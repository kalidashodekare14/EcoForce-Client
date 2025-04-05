import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Swiper navigation={true}
                modules={[Navigation]}
                className="relative">
                <SwiperSlide>
                    <div className='font-rubik flex flex-col justify-center items-center gap-5 text-white h-[500px]  banner1 bg-no-repeat bg-center bg-cover'>
                        <p className='text-[16px]'>Clean Environment, Healthy Life</p>
                        <h3 className='text-2xl w-[600px] text-center uppercase'>Let's work together to remove waste and protect nature!</h3>
                        <div className='space-x-3'>
                            <button className='btn bg-[#0077b6] border-0 text-white'>Join Us</button>
                            <button className='btn bg-[#0077b6] border-0 text-white'>Donate</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='font-rubik flex flex-col justify-center items-center gap-5 text-white h-[500px]  banner2 bg-no-repeat bg-center bg-cover'>
                        <p className='text-xl '>Plant Trees, Save the Earth</p>
                        <h3 className='text-3xl w-[600px] text-center uppercase'>A greener future starts with us!</h3>
                        <div className='space-x-3'>
                            <button className='btn bg-[#0077b6] border-0 text-white'>Join Us</button>
                            <button className='btn bg-[#0077b6] border-0 text-white'>Donate</button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Banner