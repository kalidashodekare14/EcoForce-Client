import React, { useEffect, useState } from 'react'
import { FaBars, FaClipboardList, FaCommentDollar, FaDollarSign, FaHistory } from 'react-icons/fa'
import { GiProgression } from 'react-icons/gi'
import { ImUsers } from 'react-icons/im'
import { IoMdNotifications } from 'react-icons/io'
import { MdAssignmentAdd, MdEventNote, MdOutlineStreetview } from 'react-icons/md'
import { SiGooglecampaignmanager360 } from 'react-icons/si'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useLocation } from 'react-router'
import { roleData } from '../../Redux/roleSlice'

const dashboard = () => {

    const [toggle, setToggle] = useState(false)
    const location = useLocation()
    const pathname = location.pathname
    const disPatch = useDispatch()
    const { isRole, loading, error } = useSelector((state) => state.role)


    useEffect(() => {
        const token = localStorage.getItem('token')
        const roleFetched = async () => {
            disPatch(roleData({ token: token }))
        }
        if (token) {
            roleFetched()
        }
    }, [])

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const donorNav = [
        {
            id: 1,
            name: "My Donations",
            icon: <FaClipboardList />,
            route: "/dashboard/my_donations",
        },
        {
            id: 2,
            name: "Donate Now",
            icon: <FaCommentDollar />,
            route: "/dashboard/donate_now",
        },
        {
            id: 2,
            name: "Transaction History",
            icon: <FaHistory />,
            route: "/dashboard/transaction_history",
        }
    ]

    const volunteerNav = [
        {
            id: 1,
            name: "Available Events",
            icon: <MdEventNote />,
            route: "/dashboard/available_events",
        },
        {
            id: 2,
            name: "My Assigned Events",
            icon: <MdAssignmentAdd />,
            route: "/dashboard/my_assigned_events",
        },
        {
            id: 2,
            name: "Progress Reports",
            icon: <GiProgression />,
            route: "/dashboard/progress_reports",
        }
    ]

    const adminNav = [
        {
            id: 1,
            name: "Overview",
            icon: <MdOutlineStreetview />,
            route: "/dashboard/overview",
        },
        {
            id: 2,
            name: "Manage Users",
            icon: <ImUsers />,
            route: "/dashboard/manage_users",
        },
        {
            id: 2,
            name: "Event Management",
            icon: <SiGooglecampaignmanager360 />,
            route: "/dashboard/event_management",
        },
        {
            id: 2,
            name: " Donations",
            icon: <FaHistory />,
            route: "/dashboard/donations",
        },
        {
            id: 2,
            name: "Reports & Analytics",
            icon: <FaDollarSign />,
            route: "/dashboard/report_and_analytics",
        }
    ]

    return (
        <div className='flex'>
            <div className={`absolute lg:static lg:translate-y-0 lg:translate-x-0  ${toggle ? "translate-x-0 translate-y-[70px] duration-300" : "-translate-x-full translate-y-[70px] duration-300"}  bg-white w-52 border border-[#bbb] h-screen`}>
                <div className='text-center p-3'>
                    <h1 className='text-2xl'>EcoForce</h1>
                </div>
                <div className='flex flex-col space-y-1'>
                    {
                        isRole === "Donor" && (
                            donorNav.map(navi => (
                                <Link key={navi.id} to={navi.route}>
                                    <div className={`${pathname === navi.route && "hover:bg-none bg-[#0077b6] text-white"} flex items-center gap-1 p-1 hover:bg-[#0077b6] hover:text-white`}>
                                        <span>{navi.icon}</span>
                                        <span className=''>{navi.name}</span>
                                    </div>
                                </Link>
                            ))
                        )
                    }
                    {
                        isRole === "Volunteer" && (
                            volunteerNav.map(navi => (
                                <Link key={navi.id} to={navi.route}>
                                    <div className={`${pathname === navi.route && "hover:bg-none bg-[#0077b6] text-white"} flex items-center gap-1 p-1 hover:bg-[#0077b6] hover:text-white`}>
                                        <span>{navi.icon}</span>
                                        <span className=''>{navi.name}</span>
                                    </div>
                                </Link>
                            ))
                        )
                    }
                    {
                        isRole === "Admin" && (
                            adminNav.map(navi => (
                                <Link key={navi.id} to={navi.route}>
                                    <div className={`${pathname === navi.route && "hover:bg-none bg-[#0077b6] text-white"} flex items-center gap-1 p-1 hover:bg-[#0077b6] hover:text-white`}>
                                        <span>{navi.icon}</span>
                                        <span className=''>{navi.name}</span>
                                    </div>
                                </Link>
                            ))
                        )
                    }
                </div>
            </div>
            <div className='w-full h-screen'>
                <div className='flex justify-between items-center shadow-xl py-2 px-5'>
                    <FaBars className='lg:hidden' onClick={handleToggle} />
                    <h1>Welcome</h1>
                    <div className='flex items-center gap-3'>
                        <div className='relative cursor-pointer'>
                            <IoMdNotifications className='text-3xl' />
                            <p className='absolute -top-2 -right-2 flex justify-center items-center w-6 h-6 rounded-full bg-red-500 text-white'>10</p>
                        </div>
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default dashboard