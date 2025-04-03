import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'

const loginPage = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <div className='flex justify-center items-center h-[500px]'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-96 border border-[#bbb] p-5'>
          <div className='flex flex-col justify-center items-center gap-3'>
            <h1 className='text-3xl'>Login</h1>
            <div className='flex flex-col w-full'>
              <label htmlFor="">Email</label>
              <input {...register("email", { required: true })} className='input focus:outline-0 w-full' type="text" />
              {errors.email && <span className='text-red-500'>Email field is required</span>}
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor="">Password</label>
              <input {...register("password", { required: true })} className='input focus:outline-0 w-full' type="password" />
              {errors.password && <span className='text-red-500'>Password field is required</span>}
            </div>
            <button type='submit' className='btn  bg-[#0077b6] text-white w-32'>Login</button>
          </div>
          <div className='my-3 space-x-1'>
            <span>Create your account!</span>
            <Link to={"/signup"}><span className='text-[#0077b6]'>SignUp</span></Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default loginPage