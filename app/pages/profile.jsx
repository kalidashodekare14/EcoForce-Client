import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { FiEdit } from 'react-icons/fi'
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import useAuth from '../hooks/useAuth/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { profileUpdate, profileData } from '../Redux/profileSlice'

const profile = () => {

    const { user } = useAuth()
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const genderData = ["Male", "Female", "Others"];
    const [selectedGender, setSelectedGender] = useState(null)
    const dispatch = useDispatch()
    const { userData, loading, error } = useSelector((state) => state.profile)

    console.log('checking', userData)


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    useEffect(() => {
        dispatch(profileData({ email: user }))
    }, [user])


    const onSubmit = data => {
        console.log(data);
        const profileData = {
            name: data.name,
            phone_number: parseInt(data.phone_number),
            address: data.address,
            gender: selectedGender,
            date_of_birth: data.date_of_birth
        }
        dispatch(profileUpdate({ email: user, data: profileData }))
    }


    return (
        <div className='lg:mx-60'>
            <div className='border border-[#bbb] rounded-2xl'>
                <div className='w-full h-40 bg-black'>
                </div>
                <div className="avatar -mt-20 mx-5">
                    <div className="w-32 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div className='mx-5 my-3 space-y-1 flex justify-between'>
                    <div>
                        <h1 className='text-2xl font-bold'>{userData?.name || "N/A"}</h1>
                        <p className='text-[15px]'>{userData?.email || "N/A"}</p>
                    </div>
                    <div onClick={onOpenModal} className='bg-[#bbb] w-10 h-10 rounded-full flex justify-center items-center'>
                        <FiEdit className='cursor-pointer text-2xl' />
                    </div>
                </div>
                <div className='mx-5 py-3 grid grid-cols-1 lg:grid-cols-3 gap-3'>
                    {
                        userData?.phone_number && (
                            <div className='flex flex-col'>
                                <span className='flex items-center gap-1'>
                                    {/* <FaPhoneAlt /> */}
                                    Phone number
                                </span>
                                <span className='border border-[#bbb] p-2'>{userData?.phone_number || "N/A"}</span>
                            </div>
                        )
                    }
                    {
                        userData?.gender && (
                            <div className='flex flex-col'>
                                <span className='flex items-center gap-1'>
                                    {/* <FaPhoneAlt /> */}
                                    Gender
                                </span>
                                <span className='border border-[#bbb] p-2'>{userData?.gender || "N/A"}</span>
                            </div>
                        )
                    }
                    {
                        userData?.date_of_birth && (
                            <div className='flex flex-col'>
                                <span className='flex items-center gap-1'>
                                    {/* <FaPhoneAlt /> */}
                                    Date Of Birth
                                </span>
                                <span className='border border-[#bbb] p-2'>{userData?.date_of_birth || "N/A"}</span>
                            </div>
                        )
                    }
                    {
                        userData?.date_of_birth && (
                            <div className='flex flex-col'>
                                <span className='flex items-center gap-1'>
                                    {/* <FaPhoneAlt /> */}
                                    Address
                                </span>
                                <span className='border border-[#bbb] p-2'>{userData?.address || "N/A"}</span>
                            </div>
                        )
                    }
                </div>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <form onSubmit={handleSubmit(onSubmit)} className='lg:w-96 h-96 my-5 space-y-3 overflow-auto'>
                    <div className='w-full'>
                        <label htmlFor="">Name</label>
                        <input {...register("name")} className='input border focus:outline-0 border-[#bbb] w-full' placeholder='Enter your name' type="text" />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="">Email</label>
                        <input disabled className='input border focus:outline-0 border-[#bbb] w-full' placeholder='Enter your email' type="text" />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="">Phone Number</label>
                        <input {...register("phone_number")} className='input border focus:outline-0 border-[#bbb] w-full' placeholder='Enter your email' type="text" />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="">Address</label>
                        <textarea {...register("address")} className='textarea border focus:outline-0 border-[#bbb] w-full' placeholder='Enter your full address' type="text" />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="">Gender</label>
                        <div className='flex items-center gap-2'>
                            {
                                genderData.map(gender => (
                                    <div className='flex items-center gap-2'>
                                        <input
                                            type="checkbox"
                                            className="checkbox checkbox-accent"
                                            value={gender}
                                            checked={gender === selectedGender}
                                            onChange={(e) => setSelectedGender(e.target.value)}
                                        />
                                        <span>{gender}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='w-full'>
                        <label htmlFor="">Date of birth</label>
                        <input {...register("date_of_birth")} className='input border focus:outline-0 border-[#bbb] w-full' type="date" />
                    </div>
                    <button type='btn' className='btn'>Submit</button>
                </form>
            </Modal>
        </div>
    )
}

export default profile