import React from 'react'

const useTitle = ({ value }) => {
    return (
        <div className='flex justify-center items-center'>
            <h1 className='text-3xl pb-2 border-b-2 border-[#0077b6]'>{value}</h1>
        </div>
    )
}

export default useTitle