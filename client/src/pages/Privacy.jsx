import React from 'react'
import listicon from '../assets/list-terms.png'
import star from '../assets/star-pu.png'
import star2 from '../assets/star2.png'
import man from '../assets/08-1.png'
import vector from '../assets/Vector.png'

function Privacy() {
    return (
        <div className='Privacy p-12 lg:flex justify-between'>
            <div>
                <div className="flex justify-between w-[300px] lg:w-[500px]">
                    <h1 className='font-bold text-xl lg:text-4xl'>Privacy Policy and</h1>
                    <div>
                        <img src={star2} alt="" />
                    </div>
                </div>
                <h1 className='purple font-bold text-xl lg:text-4xl'>Terms</h1>
                <div className="flex justify-between w-[350px] lg:w-[600px]">
                    <p className="p-8 pl-0">Last updated on september 12, 2023</p>
                    <div className='hidden lg:block'>
                        <img src={star} alt="" />
                    </div>
                </div>
                <div className='flex justify-between w-[300px]'>
                    <p className="w-[350px] lg:w-[500px]">Below are our privacy & policy, which outline a lot of goodies. It's our aim to always take of our participant.</p>
                    <div className='lg:hidden mt-10'>
                        <img src={star} alt="" />
                    </div>
                </div>
                <div className="box rounded p-10 w-[300px] lg:w-[500px] mt-10">
                    <p className="">
                        At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.
                    </p>
                    <h2 className="purple font-bold mt-10">Liscensing Policy</h2>
                    <p className="font-bold mt-3">Here are terms of our Standard Liscense:</p>
                    <ul className='mt-1'>
                        <li className='flex justify-between w-[250px] lg:w-[450px]'>
                            <div>
                                <img src={listicon} alt="" width='20px' className='mr-1' />
                            </div>
                            <p className='w-[210px] lg:w-[410px]'>
                                The Standard Liscense grants you a non-exclusive right to navigate and register for our event.
                            </p>
                        </li>
                        <li className='flex justify-between w-[250px] lg:w-[450px]'>
                            <div>
                                <img src={listicon} alt="" width='20px' className='mr-1' />
                            </div>
                            <p className='w-[210px] lg:w-[410px]'>
                                You are liscensed to use the item available at any free source sites, for your project development.
                            </p>
                        </li>
                    </ul>
                    <button className='read-more px-5 py-2 rounded mt-5'>Read More</button>
                </div>
            </div>
            <div>
                <div className="relative mt-10">
                    <img src={vector} alt="" className='absolute' />
                    <img src={man} alt="" className='relative' />
                </div>
            </div>
        </div>
    )
}

export default Privacy