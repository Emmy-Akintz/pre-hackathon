import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { AiFillCaretLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setName('')
        setEmail('')
        setMessage('')
        console.log(name, email, message);
    }
    return (
        <div className='Contact'>
            <div className='hidden lg:block'>
                <Navbar />
            </div>
            <div className="p-12 block lg:hidden">
                <Link to='/'><AiFillCaretLeft /></Link>
            </div>
            <div className="p-12 lg:flex justify-between">
                <div className="hidden lg:block">
                    <h1 className="purple font-bold text-4xl">Get in touch</h1>
                    <p className='mt-5'>Contact</p>
                    <p>Information</p>
                    <p className="mt-5">27, Alara Street</p>
                    <p>Yaba 100012</p>
                    <p>Lagos State</p>
                    <p className="mt-5">Call us: 07067981819</p>
                    <p className="mt-5">We are open from Monday-Friday</p>
                    <p>08:00am - 05:00pm</p>
                    <p className="purple mt-5">Share on</p>
                    <div className="flex justify-between w-[90px] mt-2">
                        <FaInstagram />
                        <FaTwitter />
                        <FaFacebook />
                        <FaLinkedin />
                    </div>
                </div>
                <div className="box">
                    <h3 className='purple font-bold text-xl lg:text-2xl'>Questions or need assistance?</h3>
                    <h3 className='purple font-bold text-xl lg:text-2xl'>Let us know about it</h3>
                    <div className='mt-2 block lg:hidden'>
                        <p className="">Email us below to any questions related to out event</p>
                    </div>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={name} className='px-10 py-2 rounded' onChange={(e) => setName(e.target.value)} placeholder='First Name' />
                        <br /><br />
                        <input type="email" value={email} className='px-10 py-2 rounded' onChange={(e) => setEmail(e.target.value)} placeholder='Mail' />
                        <br /><br />
                        <input type="text" value={message} className='px-10 py-2 rounded' onChange={(e) => setMessage(e.target.value)} placeholder='Message' />
                        <br /><br />
                        <div className="text-center">
                            <input type="submit" value="Submit" className='submit px-4 py-2 rounded' />
                        </div>
                    </form>
                    <div className="mt-8 text-center block lg:hidden">
                        <p className="purple">Share on</p>
                        <div className="flex justify-between w-[90px] m-auto mt-2">
                            <FaInstagram />
                            <FaTwitter />
                            <FaFacebook />
                            <FaLinkedin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact