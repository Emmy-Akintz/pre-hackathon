import React from 'react'
import Navbar from '../components/Navbar'

function Register() {
  return (
    <div className='Register'>
        <div className="hidden lg:block">
            <Navbar />
        </div>
        <div className="text-purple-500 block lg:hidden p-12">
            Register
        </div>
    </div>
  )
}

export default Register