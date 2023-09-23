import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import getlinked from '../assets/getlinked.png'
import { MdMenu, MdCancel } from 'react-icons/md'

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false)

    return (
        <div className='Navbar flex justify-between px-12 py-7 items-center relative'>
            <div className={dropdown ? 'hidden' : "image"}>
                <img src={getlinked} alt="" />
            </div>
            <div className={dropdown ? '' : 'hidden lg:flex md:flex w-[60%] justify-between items-center'}>
                <ul className={dropdown ? '' : 'flex w-[60%] justify-between items-center'}>
                    <li className={dropdown ? 'my-2' : ''}><Link className='nav' to='/'>Timeline</Link></li>
                    <li className={dropdown ? 'my-2' : ''}><Link className='nav' to='/'>Overview</Link></li>
                    <li className={dropdown ? 'my-2' : ''}><Link className='nav' to='/'>FAQs</Link></li>
                    <li className={dropdown ? 'my-2' : ''}><Link className='nav' to='/contact'>Contact</Link></li>
                </ul>
                <button className='register-button p-2 rounded'>
                    <Link to='/register'>
                        Register
                    </Link>
                </button>
            </div>
            <div className={dropdown ? 'hidden md:hidden lg:hidden' : 'block md:hidden lg:hidden'} onClick={() => setDropdown(true)}>
                <MdMenu />
            </div>
            <div className={dropdown ? 'block md:hidden lg:hidden mb-32' : 'hidden md:hidden lg:hidden'} onClick={() => setDropdown(false)}>
                <MdCancel />
            </div>
        </div>
    );
}

export default Navbar;