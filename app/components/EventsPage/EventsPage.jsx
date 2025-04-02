import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { SlCalender } from 'react-icons/sl'
import { Link } from 'react-router'

const EventsPage = () => {

    const eventsData = [
        {
            "id": 1,
            "title": "Tree Plantation Drive",
            "date": "15th April 2025",
            "location": "City Park",
            "description": "Join us in planting trees to restore nature, combat climate change, and create a greener future!",
            "image": "https://i.ibb.co.com/Vcwf8Byr/img1.jpg"
        },
        {
            "id": 2,
            "title": "Beach Clean-up Campaign",
            "date": "18th April 2025",
            "location": "Sunset Beach",
            "description": "Help reduce waste, protect marine life, and keep our beaches clean for future generations!",
            "image": "https://i.ibb.co.com/fdSTwDkP/img2.jpg"
        },
        {
            "id": 3,
            "title": "Climate Awareness Rally",
            "date": "20th April 2025",
            "location": "Downtown Square",
            "description": "Raise your voice for climate action, spread awareness, and inspire change for a sustainable future!",
            "image": "https://i.ibb.co.com/Vcwf8Byr/img1.jpghttps://i.ibb.co.com/xtWVT7pM/img3.jpg"
        },
        {
            "id": 4,
            "title": "Eco-Friendly Workshop",
            "date": "22nd April 2025",
            "location": "Green Center",
            "description": "Learn how to adopt an eco-friendly lifestyle with sustainable practices and DIY projects.",
            "image": "https://i.ibb.co.com/39pDCtN0/people-taking-care-plants-together-medium-shot-23-2149098308.jpg"
        },
        {
            "id": 5,
            "title": "Wildlife Conservation Seminar",
            "date": "25th April 2025",
            "location": "City Hall",
            "description": "Join experts in a discussion about wildlife conservation and how we can protect endangered species.",
            "image": "https://i.ibb.co.com/FRDGFCf/close-up-deer-with-man-field-1048944-1854151.jpg"
        },
        {
            "id": 6,
            "title": "Organic Farming Training",
            "date": "28th April 2025",
            "location": "Eco Farm",
            "description": "Learn about organic farming techniques and how to grow food sustainably.",
            "image": "https://i.ibb.co.com/PZJPdVSv/agricultural-researcher-with-tablet-slowly-inspect-plants-1150-10104.jpg"
        },
        {
            "id": 7,
            "title": "Energy Conservation Webinar",
            "date": "2nd May 2025",
            "location": "Online",
            "description": "An online session on saving energy and adopting renewable energy sources at home and work.",
            "image": "https://i.ibb.co.com/99864HSP/side-view-man-using-tablet-eco-friendly-wind-power-project-layout-23-2148847800.jpg"
        },
        {
            "id": 8,
            "title": "River Clean-up Drive",
            "date": "5th May 2025",
            "location": "Green River Bank",
            "description": "Be part of our efforts to clean the riverbanks and remove plastic waste from water bodies.",
            "image": "https://i.ibb.co.com/ynrkGK0q/men-women-help-each-other-collect-garbage-1150-23974.jpg"
        },
        {
            "id": 9,
            "title": "Sustainable Living Fair",
            "date": "10th May 2025",
            "location": "Community Park",
            "description": "Explore sustainable products, attend talks, and learn about reducing your environmental impact.",
            "image": "https://i.ibb.co.com/nM3nkKwh/gardeners-near-big-plant-23-2147768556.jpg"
        },
        {
            "id": 10,
            "title": "Zero Waste Challenge",
            "date": "15th May 2025",
            "location": "Online",
            "description": "Take part in our zero-waste challenge and learn how to live a waste-free lifestyle.",
            "image": "https://i.ibb.co.com/4w88MkT5/volunteers-collecting-waste-beach-23-2147826999.jpg"
        }
    ]



    return (
        <div>
            <div className='lg:px-32 bg-[#f7f7f7] p-5 flex flex-col lg:flex-row justify-between items-center'>
                <h1 className='text-xl'>Events</h1>
                <div className='flex items-center gap-3'>
                    <Link to={'/'}>
                        <span className='hover:text-[#0077b6] duration-300'>Home</span>
                    </Link>
                    <span>/</span>
                    <span>Events</span>
                </div>
            </div>
            <div className='lg:mx-32 mx-3 my-10 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {eventsData.map(event => (
                    <div>
                        <div className='w-full h-60'>
                            <img className='w-full h-full' src={event.image} alt="" />
                        </div>
                        <div className='space-y-3 mt-3'>
                            <h1 className='text-2xl'>{event.title}</h1>
                            <div className='flex items-center gap-3'>
                                <div className='text-[#4a4747] flex items-center gap-2'>
                                    <SlCalender />
                                    <p>{event.date}</p>
                                </div>
                                <div className='text-[#4a4747] flex items-center gap-2'>
                                    <FaLocationDot />
                                    <p>{event.location}</p>
                                </div>
                            </div>
                            <p className='text-[#4a4747]'>{event.description.slice(0, 70)}...</p>
                            <div className='flex items-center gap-3'>
                                <button className='btn w-32 bg-none border-[#0077b6] text-[#0077b6]'>Join Now</button>
                                <button className='btn w-32 bg-none border-[#0077b6] text-[#0077b6]'>View Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default EventsPage