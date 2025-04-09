import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaCamera } from 'react-icons/fa';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import useAuth from '../../../hooks/useAuth/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { eventsManagementDataCreate, eventsManagementFetched } from '../../../Redux/adminDashboard/eventsManagementSlice'

const EventManagement = () => {

    const { user } = useAuth()
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const dispatch = useDispatch()
    const { eventsData, loading, error } = useSelector((state) => state.events_management)
    console.log('checking event', eventsData)


    useEffect(() => {
        dispatch(eventsManagementFetched())
    }, [])

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        const eventData = {
            title: data.title,
            category: data.category,
            location: data.location,
            date_and_time: data.date_and_time,
            description: data.description,
            email: user
        }
        dispatch(eventsManagementDataCreate({ data: eventData }))
        if (loading === false) {
            setOpen(false)
        }

    }

    return (
        <div className='px-5 bg-[#cfcfcf] h-[600px] py-5'>
            <div className='flex justify-between items-center bg-white mb-5 p-3 rounded-'>
                <div>
                    <input className='input focus:outline-0' placeholder='Search....' type="text" />
                </div>
                <div>
                    <button onClick={onOpenModal} className='btn bg-[#0077b6] text-white'>Add Event</button>
                </div>
            </div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Loaction</th>
                            <th>Date Of Birth</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            eventsData.length > 0 ? (
                                eventsData.map(events => (
                                    <tr>
                                        <th>1</th>
                                        <td>{events?.title}</td>
                                        <td>{events?.category}</td>
                                        <td>{events?.location}</td>
                                        <td>{events?.date_and_time}</td>
                                        <td>
                                            <div>

                                            </div>
                                        </td>
                                    </tr>
                                ))

                            ) : (
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th>No Data</th>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <form onSubmit={handleSubmit(onSubmit)} className='w-96 space-y-1'>
                    <button type='submit' className='btn bg-[#0077b6] text-white'>Add Event</button>
                    <div className='relative flex flex-col justify-center items-center w-32 m-auto'>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div onClick={() => document.querySelector('input[type="file"]').click()} className='absolute right-2 bottom-0 w-10 h-10 cursor-pointer rounded-full text-xl bg-[#bbb] flex justify-center items-center'>
                            <FaCamera />
                            <input className='hidden' type="file" />
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-1'>
                        <label htmlFor="">Event title</label>
                        <input {...register("title", { required: true })} className='input  focus:outline-0 w-full' type="text" />
                        {errors.title && <span className='text-red-500'>Title field is required</span>}
                    </div>
                    <div className='w-full flex flex-col gap-1'>
                        <label htmlFor="">Category</label>
                        <input {...register("category", { required: true })} className='input  focus:outline-0 w-full' type="text" />
                        {errors.category && <span className='text-red-500'>Category field is required</span>}
                    </div>
                    <div className='w-full flex flex-col gap-1'>
                        <label htmlFor="">Location</label>
                        <input {...register("location", { required: true })} className='input  focus:outline-0 w-full' type="text" />
                        {errors.location && <span className='text-red-500'>Location field is required</span>}
                    </div>
                    <div className='w-full flex flex-col gap-1'>
                        <label htmlFor="">Date & Time</label>
                        <input {...register("date_and_time", { required: true })} className='input  focus:outline-0 w-full' type="date" />
                        {errors.date_and_time && <span className='text-red-500'>Date and time field is required</span>}
                    </div>
                    <div className='w-full flex flex-col gap-1'>
                        <label htmlFor="">Description</label>
                        <textarea {...register("description", { required: true })} className='textarea focus:outline-0 w-full' type="text" />
                        {errors.description && <span className='text-red-500'>Description field is required</span>}

                    </div>
                </form>
            </Modal>

        </div>
    )
}

export default EventManagement