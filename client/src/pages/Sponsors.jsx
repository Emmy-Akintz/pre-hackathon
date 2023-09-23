import React from 'react'
import image1 from '../assets/Liberty company logo white colour.png'
import image2 from '../assets/Liberty company logo white.png'
import image3 from '../assets/Winwise logo White colour 1.png'
import image4 from '../assets/Wisper logo white.png'
import image5 from '../assets/Paybox.png'
import image6 from '../assets/Vizual Plus.png'
import horline from '../assets/Line 17.png'
import vertline from '../assets/Line 12.png'


function Sponsors() {
    return (
        <div className='Sponsors p-12'>
            <h1 className='font-bold text-xl lg:text-4xl text-center'>
                Parners and Sponsors
            </h1>
            <p className="mt-5 w-[300px] lg:w-[500px] m-auto text-center">
                Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors
            </p>
            <div className="partners mt-5 m-auto lg:p-12 rounded-xl w-[300px] lg:w-[1000px] grid grid-cols-3">
                <div className="partner1 text-center m-5">
                    <img src={image1} alt="" className='m-auto w-[200px]' />
                </div>
                <div className="partner2 text-center m-5">
                    <img src={image2} alt="" className='m-auto w-[200px]' />
                </div>
                <div className="partner3 text-center m-5">
                    <img src={image3} alt="" className='m-auto w-[200px]' />
                </div>
                <div className="partner4 text-center m-5">
                    <img src={image4} alt="" className='m-auto w-[200px]' />
                </div>
                <div className="partner5 text-center m-5">
                    <img src={image5} alt="" className='m-auto w-[200px]' />
                </div>
                <div className="partner6 text-center m-5">
                    <img src={image6} alt="" className='m-auto w-[200px]' />
                </div>
            </div>
        </div>
    )
}

export default Sponsors