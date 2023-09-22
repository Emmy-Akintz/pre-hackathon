import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='Navbar flex justify-between px-12 py-7 items-center'>
            <h1>get<span className='linked'>linked</span></h1>
            <div className='flex w-[50%] justify-between items-center'>
                <ul className='flex w-[60%] justify-between items-center'>
                    <li><Link to='/'>Timeline</Link></li>
                    <li><Link to='/'>Overview</Link></li>
                    <li><Link to='/'>FAQs</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                </ul>
                <button className='register-button p-2 rounded'>Register</button>
            </div>
        </div>
    );
}

export default Navbar;