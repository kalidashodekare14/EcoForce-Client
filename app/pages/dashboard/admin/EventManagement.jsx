import React, { useState } from 'react'
import { FaCamera } from 'react-icons/fa';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const EventManagement = () => {

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

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
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <div>
                    <div className='relative flex flex-col justify-center items-center'>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className='absolute right-0 w-10 h-10 rounded-full text-xl bg-[#bbb] flex justify-center items-center'>
                            <FaCamera />
                        </div>
                    </div>
                    <div className='w-full'>
                        <label htmlFor="">Event title</label>
                        <input className='input  focus:outline-0 w-full' type="text" />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="">Category</label>
                        <input className='input  focus:outline-0 w-full' type="text" />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="">Location</label>
                        <input className='input  focus:outline-0 w-full' type="text" />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="">Date & Time</label>
                        <input className='input  focus:outline-0 w-full' type="date" />
                    </div>
                    <div className='w-full'>
                        <label htmlFor="">Description</label>
                        <textarea className='textarea focus:outline-0 w-full' type="date" />
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default EventManagement