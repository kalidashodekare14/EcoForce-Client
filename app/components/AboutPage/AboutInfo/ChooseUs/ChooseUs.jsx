import React from 'react'
import img1 from '../../../../images/about/choose_us.jpg'

const ChooseUs = () => {
    return (
        <div className='lg:mx-32 mx-3'>
            <div className='flex justify-center items-center'>
                <h1 className='text-3xl pb-2 border-b-2 border-[#0077b6] my-10'>Why Choose Us</h1>
            </div>
            <div className='flex items-center gap-3'>
                <div className='w-[40%]'>
                    <img className='w-full h-full' src={img1} alt="" />
                </div>
                <div className='w-[60%]'>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-semibold">Committed to Sustainability</div>
                        <div className="collapse-content text-sm">We take long-term, impactful actions to protect nature and promote eco-friendly practices. From reducing carbon footprints to promoting green energy, sustainability is at the heart of everything we do.</div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">Community-Driven Approach</div>
                        <div className="collapse-content text-sm">We believe in the power of collective action. Our organization thrives on community participation, empowering individuals to take meaningful steps toward a greener planet.</div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">Science-Based & Innovative Solutions</div>
                        <div className="collapse-content text-sm">Our environmental initiatives are backed by research, technology, and scientific data, ensuring that we implement the most effective and innovative solutions for nature conservation.</div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">Transparency & Accountability</div>
                        <div className="collapse-content text-sm"> We maintain complete transparency in our projects, financials, and decision-making processes. Every donation, every action, and every step is accounted for, ensuring trust and integrity.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs