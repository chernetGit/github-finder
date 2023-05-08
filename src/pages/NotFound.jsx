import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='hero text-6xl items-center'>
      <div className='hero-content flex justify-center items-center'>
        <div className='max-w-lg'>
          <h1 className='text-8xl font-bold mb-8 '>Oops!</h1>
          <p className='text-5xl mb-8'>404 - Page Not Found</p>
          <Link
            to='/'
            className='bg-blue-600 text-white rounded-md text-2xl flex w-[40%] h-[40px] mb-10 items-center'
          >
            <FaHome className='mr-2 px-[2px]' />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
