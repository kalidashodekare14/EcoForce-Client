import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FiEdit } from 'react-icons/fi'
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const profile = () => {

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const genderData = ["Male", "Female", "Others"];
    const [selectedGender, setSelectedGender] = useState(null)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        const profileData = {
            name: data.name,
            phone_number: data.phone_number,
            address: data.address,
            gender: selectedGender,
            date_of_birth: data.date_of_birth
        }
        console.log('checking data', profileData)
    }


    return (
        <div className='mx-60'>
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
                        <h1 className='text-2xl font-bold'>Kalidash Odekare</h1>
                        <p className='text-[15px]'>kalidashodekare14@gmail.com</p>
                    </div>
                    <div onClick={onOpenModal} className='bg-[#bbb] w-10 h-10 rounded-full flex justify-center items-center'>
                        <FiEdit className='cursor-pointer text-2xl' />
                    </div>
                </div>
                <div>

                </div>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <form onSubmit={handleSubmit(onSubmit)} className='w-96 h-96 my-5 space-y-3 overflow-auto'>
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