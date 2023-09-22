import React from 'react'
import image from '../assets/8046554 1.png'

function Judge() {
    return (
        <div className="Judge p-12">
            <div className='md:flex lg:flex'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='w-[300px] lg:w-[500px]'>
                    <h1 className='font-bold text-xl lg:text-4xl'>Judging Citeria</h1>
                    <h1 className='purple font-bold text-xl lg:text-4xl'>Key attibutes</h1>
                    <p className='mt-5'><span>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the solution. Consider wether it addresses a real-world problem in a novel way or introduce innovative features.</p>
                    <p className='mt-5'><span>Functionality:</span> Access how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution</p>
                    <p className='mt-5'><span>Impact and Relevance:</span> Determine the potential impact of the solution in the real world. Does it address a significant problem. and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.</p>
                    <p className='mt-5'><span>Technical Complexity:</span> Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use pf advanced technologies or algorithms, and the scalability of the solution.</p>
                    <p className='mt-5'><span>Adherence to Hackathon Rules:</span> Judges will ensure that the team adhered to the rules and guidlines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.</p>
                    <button className="read-more text-sm mt-5 px-4 py-2 rounded">Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Judge