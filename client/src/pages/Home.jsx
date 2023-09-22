import React from 'react'
import img1 from '../assets/Igniting a Revolution in HR Innovation.png'
import vector4 from '../assets/Vector 4.png'
import star from '../assets/star.png'
import getlinkedtech from '../assets/getlinked Tech.png'
import hackathon1 from '../assets/Hackathon 1.0.png'
import chain from '../assets/chain-9365116-7621444.png'
import boom from '../assets/1f4a5.png'
import star2 from '../assets/star2.png'
import man from '../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png'
import image1 from '../assets/Image 1.png'
import purplelens from '../assets/Purple-Lens-Flare-PNG.png'
import purplelens2 from '../assets/Purple-Lens-Flare-PNG2.png'
import bulb from '../assets/Creative 1.png'

const Home = () => {
    return (
        <div className='Home p-12'>
            <img src={purplelens2} alt="" className='absolute left-0 top-[0px] h-[770px]' />
            <div className="flex justify-between">
                <div className="image2">
                    <img src={star} alt="" />
                </div>
                <div className="image1">
                    <img src={img1} alt="" className='relative' />
                    <img src={vector4} alt="" className='m-auto' />
                </div>
            </div>
            <div>
                <img src={star2} alt="" className='pl-[625px]' />
            </div>
            <div className="main">
                <div>
                    <img src={bulb} alt="" className='pl-[500px] relative' />
                </div>
                <div>
                    <img src={getlinkedtech} alt="" className='relative' />
                    <div className='flex'>
                        <img src={hackathon1} alt="" className='relative' />
                        <img src={chain} alt="" />
                        <img src={boom} alt="" />
                    </div>
                    <p className='w-[400px] my-5 relative'>
                        Participate in getlinked tech Hackathon 2023 stand a chance to win a big price
                    </p>
                    <button className='register-button p-2 my-5'>Register</button>
                    <div>
                        <img src={star2} alt="" className='pl-[450px]' />
                    </div>
                    <p className='text-5xl my-5'>00<span className='text-xl'>H</span> 00<span className='text-xl'>M</span> 00<span className='text-xl'>S</span></p>
                </div>
            </div>
            <div className=''>
                <img src={purplelens} alt="" className='absolute right-0 top-[200px] h-[500px]' />
                <img src={man} alt="" className='absolute right-0 top-[348px] h-[500px]' />
                <img src={image1} alt="" className='absolute right-[4px] top-[310px] h-[500px]' />
            </div>
        </div>
    );
}

export default Home;