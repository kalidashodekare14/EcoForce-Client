import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import { BeatLoader, FadeLoader } from 'react-spinners'
import Swal from 'sweetalert2'
import { authContext } from '../AuthProvider/AuthProvider'

const signUpPage = () => {

  const { user, loading, setLoading, registrationSystem } = useContext(authContext)
  const navigation = useNavigate();
  const genderData = ["Volunteer", "Donor"];
  const [selectedRole, setSelectedRole] = useState(null)

  console.log('checking loading', loading)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data)
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: selectedRole
    }


    registrationSystem(data.email, data.password)
      .then(async (res) => {
        console.log(res.user)
        try {
          setLoading(true)
          const res = await axios.post('http://localhost:5000/api/user/register', userInfo)
          console.log(res.data)
          if (res.data.success === true) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your registration successfully",
              showConfirmButton: false,
              timer: 1500
            });
            navigation('/login')
          }
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }
      })
      .catch(error => {
        console.log(error)
      })


  }

  return (
    <div>
      <div className='flex justify-center items-center h-[500px]'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-96 border border-[#bbb] p-5'>
          <div className='flex flex-col justify-center items-center gap-3'>
            <h1 className='text-3xl'>Sign Up</h1>
            <div className='flex flex-col w-full'>
              <label htmlFor="">Name</label>
              <input {...register("name", { required: true })} className='input focus:outline-0 w-full' type="text" />
              {errors.name && <span className='text-red-500'>Name field is required</span>}
            </div>
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
            <div className='w-full '>
              <p className='my-2'>How are you?</p>
              <div className='flex items-center gap-2'>
                {
                  genderData.map(gender => (
                    <div className='flex items-center gap-2'>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-accent"
                        value={gender}
                        checked={gender === selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                      />
                      <span>{gender}</span>
                    </div>
                  ))
                }
              </div>
            </div>
            <button type='submit' className='btn  bg-[#0077b6] text-white w-32'>
              {
                loading ? (
                  <BeatLoader
                    color="#ffffff"
                    speedMultiplier={1}
                    size={10}
                  />
                ) : (
                  "Sign Up"
                )
              }
            </button>
          </div>
          <div className='my-3 space-x-1'>
            <span>Already have an account?</span>
            <Link to={"/login"}><span className='text-[#0077b6]'>Login</span></Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default signUpPage