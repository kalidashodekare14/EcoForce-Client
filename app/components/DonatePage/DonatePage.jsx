import React from 'react'
import { Link } from 'react-router'
import img1 from '../../images/donate/img1.jpg'

const DonatePage = () => {

    const donateData = [
        {
            "id": 1,
            "title": "Environmental Protection",
            "description": "Environmental Protection involves conserving nature, reducing pollution, and promoting sustainability to safeguard our planet.",
            "goal": "80,000.00",
            "donated": "50,300.00",
            "image": "https://i.ibb.co.com/xtgD4y71/img1.jpg"
        },
        {
            "id": 2,
            "title": "Help to plant a tree",
            "description": "Help plant a tree! Trees clean the air, fight climate change, and support nature. Let's grow a greener future together!",
            "goal": "80,000.00",
            "donated": "50,300.00",
            "image": "https://i.ibb.co.com/99PS10Mz/img2.jpg"
        },
        {
            "id": 3,
            "title": "Cleaning Assistance",
            "description": "Cleaning Assistance helps keep our surroundings clean, reduce waste, and protect the planet. Join us!",
            "goal": "80,000.00",
            "donated": "50,300.00",
            "image": "https://i.ibb.co.com/3yFTrfg5/img3.jpg"
        },
        {
            "id": 4,
            "title": "Save the Oceans",
            "description": "Support our initiative to clean up the oceans and remove plastic waste to protect marine life.",
            "goal": "100,000.00",
            "donated": "65,200.00",
            "image": "https://i.ibb.co.com/kgKJd2ks/climate-change-concept-collage-23-2149129759.jpg"
        },
        {
            "id": 5,
            "title": "Wildlife Protection",
            "description": "Help us protect endangered species by supporting conservation efforts and habitat restoration.",
            "goal": "120,000.00",
            "donated": "78,900.00",
            "image": "https://i.ibb.co.com/k2Nkvprh/amazing-bengal-tiger-nature-with-its-prey-475641-1225.jpg"
        },
        {
            "id": 6,
            "title": "Eco-Friendly Schools",
            "description": "Support the development of eco-friendly schools that teach sustainability and environmental awareness.",
            "goal": "90,000.00",
            "donated": "56,700.00",
            "image": "https://i.ibb.co.com/99pqgDnf/cute-kids-exploring-nature-23-2149002901.jpg"
        },
        {
            "id": 7,
            "title": "Renewable Energy Projects",
            "description": "Promote the use of solar and wind energy by funding clean energy projects in rural areas.",
            "goal": "150,000.00",
            "donated": "95,400.00",
            "image": "https://i.ibb.co.com/0pLCkzb2/medium-shot-men-working-together-23-2148920650.jpg"
        },
        {
            "id": 8,
            "title": "Zero-Waste Communities",
            "description": "Help build zero-waste communities that promote recycling, composting, and sustainable waste management.",
            "goal": "70,000.00",
            "donated": "45,800.00",
            "image": "https://i.ibb.co.com/yc4CHDkj/medium-shot-people-collecting-food-23-2149182019.jpg"
        },
        {
            "id": 9,
            "title": "Reforestation Program",
            "description": "Plant more trees in deforested areas to restore the ecosystem and combat climate change.",
            "goal": "110,000.00",
            "donated": "72,600.00",
            "image": "https://i.ibb.co.com/60jDxT7z/reforestation-done-by-voluntary-group-23-2149500868.jpg"
        },
        {
            "id": 10,
            "title": "Clean Water Initiative",
            "description": "Provide access to clean and safe drinking water for communities affected by pollution and water scarcity.",
            "goal": "95,000.00",
            "donated": "63,500.00",
            "image": "https://i.ibb.co.com/HTLSNzG8/realistic-water-drop-with-ecosystem-23-2151196384.jpg"
        }
    ]


    return (
        <div>
            <div className='lg:px-32 bg-[#f7f7f7] p-5 flex flex-col lg:flex-row justify-between items-center'>
                <h1 className='text-xl'>Donate</h1>
                <div className='flex items-center gap-3'>
                    <Link to={'/'}>
                        <span className='hover:text-[#0077b6] duration-300'>Home</span>
                    </Link>
                    <span>/</span>
                    <span>Events</span>
                </div>
            </div>
            <div className='lg:mx-32 mx-3 my-10 grid grid-cols-1 lg:grid-cols-3 gap-3'>
                {
                    donateData.map(donate => (
                        <div className='flex flex-col justify-center items-center'>
                            <div className='w-full h-60'>
                                <img className='w-full h-full' src={donate.image} alt="" />
                            </div>
                            <div className='space-y-2 mt-3'>
                                <h1 className='text-xl'>{donate.title}</h1>
                                <p className='text-[15px] text-[#4a4747]'>{donate.description}</p>
                                <div>
                                    <progress className="progress progress-accent w-full" value="70" max="100"></progress>
                                    <p className='text-[15px] text-[#4a4747]'>${donate.donated} donated of ${donate.goal} goal</p>
                                </div>
                                <button className='btn w-32 bg-none border-[#0077b6] text-[#0077b6]'>Donate</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DonatePage