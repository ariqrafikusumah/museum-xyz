import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Navbar } from './admin/components'

function NotFound() {
  return (
    <>
      <Navbar />
      <div>
        <div className='grid grid-rows-2 text-center pt-52 '>
          <div className='text-3xl mb-3'>
            Page Not Found 404
          </div>
          <div className='text-xl mx-auto'>
            <Link to="/">
              <button className='flex border p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white'>
                <FaArrowCircleLeft className='mt-1' />&nbsp; Go back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound