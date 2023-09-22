import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import getlinked from '../assets/getlinked.png'
import { MdMenu, MdCancel } from 'react-icons/md'

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false)

    return (
        <div className='Navbar flex justify-between px-12 py-7 items-center'>
            <div className="image">
                <img src={getlinked} alt="" />
            </div>
            <div className={dropdown ? 'block' : 'hidden lg:flex md:flex w-[50%] justify-between items-center'}>
                <ul className={dropdown ? 'block' : 'flex w-[60%] justify-between items-center'}>
                    <li><Link to='/'>Timeline</Link></li>
                    <li><Link to='/'>Overview</Link></li>
                    <li><Link to='/'>FAQs</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                </ul>
                <button className='register-button p-2 rounded'>Register</button>
            </div>
            <div className={dropdown ? 'hidden' : 'block'} onClick={() => setDropdown(true)}>
                <MdMenu />
            </div>
            <div className={dropdown ? 'block' : 'hidden'} onClick={() => setDropdown(false)}>
                <MdCancel />
            </div>
        </div>
    );
}

export default Navbar;