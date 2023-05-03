import React from 'react'
import { FaSlackHash } from 'react-icons/fa'

function Footer() {
  const footerYear = new Date().getFullYear()
  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center '>
      <div className='text-white text-lg justify-center items-center text-center'>
        <FaSlackHash className='ml-[50%] text-center ' />
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
