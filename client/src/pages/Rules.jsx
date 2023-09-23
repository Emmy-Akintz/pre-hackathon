import React from 'react'
import image from '../assets/7450159-1.png'

function Rules() {
    return (
        <div className="Rules">
            <div className='md:flex lg:flex justify-between p-12'>
                <div className='w-[300px] lg:w-[500px] lg:py-48'>
                    <h1 className='font-bold text-xl lg:text-4xl'>Rules and</h1>
                    <h1 className='purple font-bold text-xl lg:text-4xl'>Guidelines</h1>
                    <p className="pt-5">
                        Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Wether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to tansform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
                    </p>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Rules