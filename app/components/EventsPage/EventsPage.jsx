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
            "image": "tree-plantation.jpg"
        },
        {
            "id": 2,
            "title": "Beach Clean-up Campaign",
            "date": "18th April 2025",
            "location": "Sunset Beach",
            "description": "Help reduce waste, protect marine life, and keep our beaches clean for future generations!",
            "image": "beach-cleanup.jpg"
        },
        {
            "id": 3,
            "title": "Climate Awareness Rally",
            "date": "20th April 2025",
            "location": "Downtown Square",
            "description": "Raise your voice for climate action, spread awareness, and inspire change for a sustainable future!",
            "image": "climate-rally.jpg"
        },
        {
            "id": 4,
            "title": "Eco-Friendly Workshop",
            "date": "22nd April 2025",
            "location": "Green Center",
            "description": "Learn how to adopt an eco-friendly lifestyle with sustainable practices and DIY projects.",
            "image": "eco-workshop.jpg"
        },
        {
            "id": 5,
            "title": "Wildlife Conservation Seminar",
            "date": "25th April 2025",
            "location": "City Hall",
            "description": "Join experts in a discussion about wildlife conservation and how we can protect endangered species.",
            "image": "wildlife-seminar.jpg"
        },
        {
            "id": 6,
            "title": "Organic Farming Training",
            "date": "28th April 2025",
            "location": "Eco Farm",
            "description": "Learn about organic farming techniques and how to grow food sustainably.",
            "image": "organic-farming.jpg"
        },
        {
            "id": 7,
            "title": "Energy Conservation Webinar",
            "date": "2nd May 2025",
            "location": "Online",
            "description": "An online session on saving energy and adopting renewable energy sources at home and work.",
            "image": "energy-webinar.jpg"
        },
        {
            "id": 8,
            "title": "River Clean-up Drive",
            "date": "5th May 2025",
            "location": "Green River Bank",
            "description": "Be part of our efforts to clean the riverbanks and remove plastic waste from water bodies.",
            "image": "river-cleanup.jpg"
        },
        {
            "id": 9,
            "title": "Sustainable Living Fair",
            "date": "10th May 2025",
            "location": "Community Park",
            "description": "Explore sustainable products, attend talks, and learn about reducing your environmental impact.",
            "image": "sustainable-fair.jpg"
        },
        {
            "id": 10,
            "title": "Zero Waste Challenge",
            "date": "15th May 2025",
            "location": "Online",
            "description": "Take part in our zero-waste challenge and learn how to live a waste-free lifestyle.",
            "image": "zero-waste.jpg"
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
            <div className='lg:mx-32 mx-3 grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {eventsData.map(event => (
                    <div>
                        <div className='w-full h-60'>
                            <img className='w-full h-full' src="https://i.ibb.co.com/Vcwf8Byr/img1.jpg" alt="" />
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
                            <p className='text-[#4a4747]'>{event.description}</p>
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