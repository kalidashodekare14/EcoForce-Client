import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router'
import img1 from '../../images/contact_img.avif'
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon, divIcon, point } from "leaflet";
const ContactPage = () => {

    const customIcon = new Icon({
        iconUrl: "https://i.ibb.co.com/fzFsrhnV/location.png",
        // iconUrl: require("./icons/placeholder.png"),
        iconSize: [38, 38] // size of the icon
    });

    const markers = [
        {
            geocode: [23.808397348766935, 90.42104188557533],
            popUp: "Dhaka, Bangladesh"
        },
        {
            geocode: [25.623170646702082, 88.64247413569394],
            popUp: "Dinajpur, Bangladesh"
        },
        {
            geocode: [26.027861527372632, 88.46579767674498],
            popUp: "Thakurgong, Bangaldesh"
        }
    ];


    return (
        <div className=''>
            <div className='lg:px-32 bg-[#f7f7f7] p-5 flex flex-col lg:flex-row justify-between items-center'>
                <h1 className='text-xl'>Contact</h1>
                <div className='flex items-center gap-3'>
                    <Link to={'/'}>
                        <span className='hover:text-[#0077b6] duration-300'>Home</span>
                    </Link>
                    <span>/</span>
                    <span>Events</span>
                </div>
            </div>
            <div className='lg:mx-32 mx-3'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-20'>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <div className='flex justify-center items-center w-14 h-14 text-2xl rounded-full bg-[#0077b6]'>
                            <FaLocationDot className='text-white' />
                        </div>
                        <p className='w-60'>20 Cooper Square, New York, NY 10003, USA</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <div className='flex justify-center items-center w-14 h-14 text-2xl rounded-full bg-[#0077b6]'>
                            <FaPhoneAlt className='text-white' />
                        </div>
                        <p>+17759802006</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <div className='flex justify-center items-center w-14 h-14 text-2xl rounded-full bg-[#0077b6]'>
                            <MdEmail className='text-white' />
                        </div>
                        <p>ecoforce@gmail.com</p>
                    </div>
                </div>
                <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-5 my-10'>
                    <div className='lg:w-[60%] w-full'>
                        <h1 className='text-2xl my-3'>Contact Us</h1>
                        <div className='space-y-3'>
                            <div className='flex flex-col lg:flex-row gap-3'>
                                <div className='flex flex-col gap-1 w-full'>
                                    <label htmlFor="">Full Name</label>
                                    <input className='input focus:outline-0 w-full' placeholder='Name' type="text" />
                                </div>
                                <div className='flex flex-col gap-1 w-full'>
                                    <label htmlFor="">Email Address</label>
                                    <input className='input focus:outline-0 w-full' placeholder='Email' type="text" />
                                </div>
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="">Subject</label>
                                <input className='input focus:outline-0 w-full' type="text" />
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="">Message</label>
                                <textarea className='textarea w-full' name="" id=""></textarea>
                            </div>
                            <button className='btn bg-[#0077b6] text-white'>Send Message</button>
                        </div>
                    </div>
                    <div className='lg:w-[50%]'>
                        <img className='w-full' src={img1} alt="" />
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <MapContainer className='h-[400px]' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        markers.map((marker) => (
                            <Marker position={marker.geocode} icon={customIcon}>
                                <Popup>
                                   {marker.popUp}
                                </Popup>
                            </Marker>
                        ))
                    }

                </MapContainer>
            </div>
        </div>
    )
}

export default ContactPage