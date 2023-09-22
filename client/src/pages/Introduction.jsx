import React from 'react'
import bigidea from '../assets/The big idea.png'
import star from '../assets/sata gra.png'

const Introduction = () => {
  return (
    <div className="Introduction p-12">
      <div className="md:flex lg:flex md:justify-between lg:justify-between">
        <div className=''>
          <div>
            <img src={bigidea} alt="" />
          </div>
        </div>
        <div className="lg:py-28 mt-8">
          <div className='flex justify-between lg:justify-between w-[300px] lg:w-[500px] items-center'>
            <div>
              <h1 className='font-bold text-xl lg:text-4xl'>Introduction to getlinked</h1>
              <h1 className='font-bold text-xl lg:text-4xl'>techHackathon 1.0</h1>
            </div>
            <div>
              <img src={star} alt="" />
            </div>
          </div>
          <p className="w-[300px] lg:w-[500px] mt-5">
            Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Wether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to tansform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;