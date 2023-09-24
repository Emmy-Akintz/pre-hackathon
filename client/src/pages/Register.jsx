import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import image from '../assets/3d-graphic-designer-showing-thumbs-up-png-1.png'
import image2 from '../assets/Part-of-move.png'
import axios from 'axios'

function Register() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [topic, setTopic] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // axios.post("https://backend.getlinked.ai/hackathon/registration", {email, number, name, topic})
        // .then(result => {
        //     console.log(result)
        //     Navigate('/')
        // })
        // .catch(err => console.log(err))
        setName('')
        setNumber('')
        setEmail('')
        setTopic('')
    }

    // useEffect(() => {
    //     axios.get('https://backend.getlinked.ai/hackathon/categories-list')
    //     .then(category => {
    //         setCategories(result.data)
    //         console.log(category)
    //     })
    //     .catch(err => console.log(err))
    // }, [])
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
                    <div className="text-purple-500 hidden lg:block">
                        Register
                    </div>
                    <div>
                        <img src={image2} alt="" />
                    </div>
                    <p className="text-xl">CREATE YOUR ACCOUNT</p>
                    <form onSubmit={handleSubmit} className=''>
                        <br />
                        <label>Team's Name</label>
                        <input className='px-4 py-2 rounded mt-2 w-[280px]' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter the name of your group' />
                        <br />
                        <br />
                        <label>Phone</label>
                        <br />
                        <input className='px-4 py-2 rounded mt-2 w-[280px]' type="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Enter your phone number' />
                        <br />
                        <br />
                        <label>Email</label>
                        <br />
                        <input className='px-4 py-2 rounded mt-2 w-[280px]' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email address' />
                        <br />
                        <br />
                        <label>Project Topic</label>
                        <br />
                        <input className='px-4 py-2 rounded mt-2 w-[280px]' type="text" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder='What is your group project topic' />
                        <br />
                        <input type="submit" value="Submit" className='submit px-4 py-2 rounded mt-4' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register