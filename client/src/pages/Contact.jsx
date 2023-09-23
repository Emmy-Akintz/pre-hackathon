import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { AiFillCaretLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setName('')
        setEmail('')
        setMessage('')
    }
    return (
        <div className='Contact'>
            <div className='hidden lg:block'>
                <Navbar />
            </div>
            <div className="p-12 block lg:hidden">
                <Link to='/'><AiFillCaretLeft /></Link>
            </div>
            <div className="p-12">
                <div className=""></div>
                <div className="">
                    <h3 className='purple font-bold text-xl lg:text-2xl'>Questions or need assistance?</h3>
                    <h3 className='purple font-bold text-xl lg:text-2xl'>Let us know about it</h3>
                    <div className='mt-2 block lg:hidden'>
                        <p className="">Email us below to any questions related to out event</p>
                    </div>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={name} className='px-4 py-2 rounded' onChange={(e) => setName(e.target.value)} placeholder='First Name' />
                        <br /><br />
                        <input type="email" value={email} className='px-4 py-2 rounded' onChange={(e) => setEmail(e.target.value)} placeholder='Mail' />
                        <br /><br />
                        <input type="text" value={message} className='px-4 py-2 rounded' onChange={(e) => setMessage(e.target.value)} placeholder='Message' />
                        <br /><br />
                        <input type="submit" value="Submit" className='submit px-4 py-2 rounded' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact