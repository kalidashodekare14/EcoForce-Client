import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { FaFacebookF, FaLinkedin, FaPinterest } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const OurTeam = () => {

    const teamMember = [
        {
            id: 1,
            image: 'https://i.ibb.co.com/xxmZmCR/img1.png',
            name: 'Jeffery B. Sanchez'
        },
        {
            id: 2,
            image: 'https://i.ibb.co.com/VYVLj76D/img2.png',
            name: 'Larry E. Trent'
        },
        {
            id: 3,
            image: 'https://i.ibb.co.com/wrzKM1p1/img3.png',
            name: 'Richard A. Calhoun'
        },
        {
            id: 4,
            image: 'https://i.ibb.co.com/vCKkT9nD/img4.png',
            name: 'Charles D. Nunez'
        },
        {
            id: 5,
            image: 'https://i.ibb.co.com/HTFRdMVr/img5.png',
            name: 'Gerry C. Polansky'
        },
        {
            id: 6,
            image: 'https://i.ibb.co.com/zTBSdtQt/img6.png',
            name: 'Vincent A. Montanez'
        },
    ]

    return (
        <div className='lg:mx-32 my-10'>
            <h1 className='text-center text-3xl my-10'>Our Team</h1>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    teamMember.map(member => (
                        <SwiperSlide key={member.id}>
                            <div className='flex flex-col justify-center items-center bg-[#bbb]'>
                                <div className=''>
                                    <img className='w-full h-full bg-[#0077b6]' src={member?.image} alt="" />
                                </div>
                                <div className=' flex flex-col justify-center items-center'>
                                    <h1 className='my-5'>{member?.name}</h1>
                                    <div className='p-3  flex items-center gap-2'>
                                        <div className=' w-8 h-8 bg-white flex justify-center items-center rounded-full'>
                                            <FaFacebookF className='' />
                                        </div>
                                        <div className='w-8 h-8 bg-white flex justify-center items-center rounded-full'>
                                            <FaXTwitter />
                                        </div>
                                        <div className='w-8 h-8 bg-white flex justify-center items-center rounded-full'>
                                            <FaLinkedin />
                                        </div>
                                        <div className='w-8 h-8 bg-white flex justify-center items-center rounded-full'>
                                            <FaPinterest />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default OurTeam