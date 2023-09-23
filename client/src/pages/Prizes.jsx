import React from 'react'
import trophy from '../assets/9486889 1.png'
import position1 from '../assets/gold_medal 1.png'
import position2 from '../assets/silver_medal 1.png'
import position3 from '../assets/bronze_medal 1.png'

function Prizes() {
    return (
        <div className='Prizes p-12'>
            <div className="w-[300px] lg:w-[500px] text-left lg:ml-[60%]">
                <h1 className='font-bold text-xl lg:text-4xl'>Prizes and</h1>
                <h1 className="purple font-bold text-xl lg:text-4xl">Rewards</h1>
            </div>
            <div className="lg:flex justify-between">
                <div>
                    <img src={trophy} alt="" />
                </div>
                <div>
                    <div className="flex justify-between w-[300px] lg:w-[650px] mt-10">
                        <div className="rounded w-[90px] lg:w-[200px] pt-0 lg:px-5 pb-5 text-center second">
                            <div className="">
                                <img src={position2} alt="" />
                            </div>
                            <h1 className="font-bold">2nd</h1>
                            <h2 className="font-bold">Runner</h2>
                            <br />
                            <h1 className="price-award font-bold text-sm lg:text-xl">N300,000</h1>
                        </div>
                        <div className="rounded w-[90px] lg:w-[200px] px-5 pb-5 text-center first relative top-[20px] pt-0">
                            <div className="">
                                <img src={position1} alt="" />
                            </div>
                            <h1 className="font-bold">1st</h1>
                            <h2 className="font-bold">Runner</h2>
                            <br />
                            <h1 className="price-award font-bold text-sm lg:text-xl">N400,000</h1>
                        </div>
                        <div className="rounded w-[90px] lg:w-[200px] pt-0 lg:px-5 pb-5 text-center third">
                            <div className="">
                                <img src={position3} alt="" />
                            </div>
                            <h1 className="font-bold">3rd</h1>
                            <h2 className="font-bold">Runner</h2>
                            <br />
                            <h1 className="price-award font-bold text-sm lg:text-xl">N150,000</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prizes