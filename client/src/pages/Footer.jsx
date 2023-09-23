import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaPhone, FaLocationArrow } from 'react-icons/fa'

function Footer() {
    return (
        <div className='Footer p-12'>
            <div className="lg:flex justify-between">
                <div className="">
                    <h1 className='font-bold text-xl lg:text-4xl'>get<span className='purple'>linked</span></h1>
                    <p className="mt-3 lg:w-[500px]">
                        Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology
                    </p>
                    <p className='mt-10'><span className='right-border pr-1'>Terms of Use</span> <span>Privacy Policy</span></p>
                </div>
                <div className=" mt-10">
                    <h1 className='purple'>Useful Links</h1>
                    <ul>
                        <li className='mt-3'><Link to='/'>Overview</Link></li>
                        <li className='mt-3'><Link to='/'>Timeline</Link></li>
                        <li className='mt-3'><Link to='/'>FAQs</Link></li>
                        <li className='mt-3'><Link to='/'>Register</Link></li>
                        <li className='flex mt-3 w-[190px] justify-between'>
                            <span className='purple'>Follow us</span>
                            <div className="flex w-[100px] justify-between">
                                <FaInstagram />
                                <FaTwitter />
                                <FaFacebook />
                                <FaLinkedin />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mt-8">
                    <h1 className="purple">Contact Us</h1>

                    <div className="flex justify-between mt-3 w-[200px]">
                        <FaPhone />
                        <p className="">+234 6707653444</p>
                    </div>
                    <div className="flex justify-between mt-6 w-[200px]">
                        <FaLocationArrow />
                        <p className="w-[130px]">27, Alara Street Yaba 100012 Lagos State</p>
                    </div>
                </div>
            </div>
            <p className="mt-10 text-center">All rights reserved. &copy; getlinked Ltd.</p>
        </div>
    )
}

export default Footer