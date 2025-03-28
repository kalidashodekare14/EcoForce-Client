import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link, useLocation } from 'react-router'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const [isSticky, setIsSticky] = useState(false)
    const pathname = useLocation()
    const handleToggle = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 150;
            setIsSticky(!isTop)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])



    const navLink = [
        {
            id: 1,
            name: 'Home',
            route: '/'
        },
        {
            id: 2,
            name: 'About Us',
            route: '/about'
        },
        {
            id: 3,
            name: 'Events',
            route: '/events'
        },
        {
            id: 4,
            name: 'Donate',
            route: '/donate'
        },
        {
            id: 5,
            name: 'Contact',
            route: '/contact'
        },
    ]

    return (
        <div className={`${isSticky ? "sticky top-0 z-50 bg-[#ffffffb9] shadow-xl backdrop-blur-lg transition-all duration-300 opacity-100" : "bg-white"}`}>
            <nav className={`z-50 w-full lg:px-32 px-3 flex justify-between  items-center py-3 font-roboto font-[200]`}>
                <div className='flex items-center gap-20'>
                    <h1 className='text-3xl'>EcoForce</h1>
                    <ul className='hidden lg:flex items-center gap-5 text-[16px] font-[400]'>
                        {
                            navLink.map((navi) => (
                                <Link className={`${pathname == navi.route && "text-[#307bc4] border-b-2 border-[#307bc4]"} hover:text-[#307bc4]`} key={navi.id} to={navi.route}>
                                    <li className='font-rubik'>{navi.name}</li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    
                    <FaBars onClick={handleToggle} className='lg:hidden' />
                </div>
                <ul className={`z-50 absolute left-0 p-5 lg:hidden  bg-[#307bc4] text-white w-full flex flex-col  gap-5 text-[19px] font-[300] translate-y-40 duration-700  ${toggle ? "translate-x-0" : "-translate-x-full"}`}>
                    {
                        navLink.map((navi) => (
                            <Link className={`${pathname == navi.route && "text-[#307bc4] border-b-2 border-[#307bc4]"} hover:text-[#307bc4]`} key={navi.id} to={navi.route}>
                                <li className='font-rubik'>{navi.name}</li>
                            </Link>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar