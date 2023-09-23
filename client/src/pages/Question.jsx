import React from 'react'
import image from '../assets/cwok_casual_21-1.png'
import star from '../assets/sata-gra.png'

function Question() {
    return (
        <div className='Question p-12 lg:flex lg:justify-between'>
            <div className='py-28'>
                <h1 className='font-bold text-xl lg:text-4xl'>Frequently Ask</h1>
                <h1 className=' purple font-bold text-xl lg:text-4xl'>Question</h1>
                <p className='w-[300px] lg:w-[500px]'>
                    We got answers to the questions that you might want to ask question about getlinked Hackathon 1.0
                </p>
                <ul>
                    <li className='w-[300px] lg:w-[500px] flex pb-5 mt-5 justify-between'>
                        <p>Can I work on a project  I started before the hackathon?</p>
                        <div>
                            <img src={star} alt="" />
                        </div>
                    </li>
                    <li className='w-[300px] lg:w-[500px] flex pb-5 mt-5 justify-between'>
                        <p>What happens if I need help during the hackathon?</p>
                        <div>
                            <img src={star} alt="" />
                        </div>
                    </li>
                    <li className='w-[300px] lg:w-[500px] flex pb-5 mt-5 justify-between'>
                        <p>What happens if I don't have an idea for the project?</p>
                        <div>
                            <img src={star} alt="" />
                        </div>
                    </li>
                    <li className='w-[300px] lg:w-[500px] flex pb-5 mt-5 justify-between'>
                        <p>Can I join a team or do I have to come with one?</p>
                        <div>
                            <img src={star} alt="" />
                        </div>
                    </li>
                    <li className='w-[300px] lg:w-[500px] flex pb-5 mt-5 justify-between'>
                        <p>What happens after the hackathon ends</p>
                        <div>
                            <img src={star} alt="" />
                        </div>
                    </li>
                    <li className='w-[300px] lg:w-[500px] flex pb-5 mt-5 justify-between'>
                        <p>Can I work on a project  I started before the hackathon?</p>
                        <div>
                            <img src={star} alt="" />
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <div className="image">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Question