import React from 'react'
import Navbar from '../components/Navbar'
import image from '../assets/3d-graphic-designer-showing-thumbs-up-png-1.png'

function Register() {
  return (
    <div className='Register'>
        <div className="hidden lg:block">
            <Navbar />
        </div>
        <div className="text-purple-500 block lg:hidden p-12">
            Register
        </div>
        <div className="lg:flex justify-between">
            <div className="w-[200px] m-auto lg:w-[500px] lg:m-0">
                <img src={image} alt="" />
            </div>
            <div className="p-5 m-auto w-[300px]">
                <p className="">Be part of this movement <span className="purple">..........</span></p>
                <p className="">CREATE YOUR ACCOUNT</p>
            </div>
        </div>
    </div>
  )
}

export default Register