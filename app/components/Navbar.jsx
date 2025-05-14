import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link, useLocation } from 'react-router'
import useAuth from '../hooks/useAuth/useAuth'
import { ImProfile } from 'react-icons/im'
import { MdDashboardCustomize } from 'react-icons/md'
import { IoLogOutOutline } from 'react-icons/io5'
import { logout } from '../Redux/authSlice'
import { useDispatch } from 'react-redux'

const Navbar = () => {

    const { user } = useAuth()
    const [toggle, setToggle] = useState(false)
    const [isSticky, setIsSticky] = useState(false)
    const [avatorToggle, setAvatorToggle] = useState(false)
    const location = useLocation()
    const pathname = location.pathname
    const dispatch = useDispatch()

    const hiddenNav = pathname.startsWith("/dashboard")


    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handleAvatarToggle = () => {
        setAvatorToggle(!avatorToggle)
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
            route: '/about_us'
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

    const handleLogOut = () => {
        dispatch(logout())
    }


    return (
        <div className={`${hiddenNav && "hidden"} ${isSticky ? "sticky top-0 z-50 bg-[#ffffffb9] shadow-xl backdrop-blur-lg transition-all duration-300 opacity-100" : "bg-white"}`}>
            <nav className={`font-rubik z-50 w-full lg:px-32 px-3 flex justify-between  items-center py-3 font-roboto font-[200]`}>
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
                <div className='flex flex-row-reverse items-center gap-3'>
                    <FaBars onClick={handleToggle} className='lg:hidden text-[20px]' />
                    <div>
                        {
                            user ? (
                                <div className='relative'>
                                    <div onClick={handleAvatarToggle} className="avatar-group -space-x-6 cursor-pointer">
                                        <div className="avatar">
                                            <div className="w-12">
                                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${avatorToggle ? "opacity-100 block duration-300" : "opacity-0 hidden duration-300"} p-3 absolute lg:-left-10 right-0  z-50 w-44  bg-white border border-[#bbb]`}>
                                        <Link to={"/profile"}>
                                            <div className='cursor-pointer flex items-center gap-1 my-1'>
                                                <span><ImProfile /></span>
                                                <span>Profile</span>
                                            </div>
                                        </Link>
                                        <Link to={""}>
                                            <div className='cursor-pointer flex items-center gap-1'>
                                                <span><MdDashboardCustomize /></span>
                                                <span>Dasboard</span>
                                            </div>
                                        </Link>
                                        <div onClick={handleLogOut} className='cursor-pointer flex items-center gap-1 my-1'>
                                            <span><IoLogOutOutline /></span>
                                            <span>Log Out</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link to={'/login'}>
                                    <button className='btn bg-[#0077b6] text-white w-32'>Login</button>
                                </Link>
                            )
                        }

                    </div>
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
            </nav >
        </div >
    )
}

export default Navbar