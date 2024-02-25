import React from 'react'
import hey from '../images/hey pics.PNG'
import manage from '../images/Capture.PNG'
import gammer from '../images/gammers.PNG'
import antic from '../images/antic.PNG'
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Projects = () => {
  return (
    <div>
        <div>
            <h2 className="text-center text-4xl text-blue py-4 font-extrabold pt-48">Projects</h2>
            <h6>projects i have worked on</h6>
        </div>
        <div>
            <div className='grid md:grid-cols-2 md:ml-6 gap-4 grid-cols-1 2xl:mx-16 mx-4'>
                <div className=' border-gray border-solid border-2  '>
                    <img src={hey} alt="" className=' w-81 md:w-80' />
                    <div className='text-white  '>
                        <div className='flex justify-between mt-6'>
                            <div className=''>
                                <h3 className='ml-1 text-blue font-extrabold text-2xl'>HeyWallet</h3>
                            </div>
                            <div className='mr-10'>
                                <h2 className='cursor-pointer text-xl hover:text-blue transition duration-500 ease-in-out'>Code Live</h2>
                            </div>
                            

                        </div>
                        <div>
                            <h5 className='text-white py-4 text-lg'> A simple project with aim of bringing everyone together  to bulid a better products. mange makes it simpler for software teams to plan day-day task.</h5>
                                
                            </div>
                       
                    </div>
                    
                    
                    
                </div>
                <div className="">
                    <img src={gammer} alt=""  className='w-81 md:w-80'/>
                    <div className='text-white flex justify-between mt-6'>
                        <div className=''>
                            <h3 className='ml-1 text-blue font-extrabold text-2xl'>Game Zone</h3>
                        </div>
                        <div>
                            <h2 className='mr-10 cursor-pointer text-xl hover:text-blue transition duration-500 ease-in-out'>Code Live</h2>
                        </div>
                    </div>
                    <h5 className='text-white py-4 text-lg '> A game zone application which a player can compete  with Rakuto in this immense challenge and be the winner of all time. </h5>
                   
                    
                    
                </div>
                <div>
                    <img src={antic} alt=""  className='w-81 md:w-80'/>
                    <div className='text-white flex justify-between mt-6'>
                        <div>
                            <h3 className='ml-1 text-blue font-extrabold text-2xl'>Antic</h3>
                        </div>
                        <div className="">
                            <h2 className='mr-10 cursor-pointer text-xl hover:text-blue transition duration-500 ease-in-out'>Code Live</h2>
                        </div>
                    </div>
                    <h5 className='text-white py-4 text-lg'> A simple interior and exterior projects design, displaying of beautiful  interior and exterior decoration room. </h5>
                    
                    
                </div>
                <div className="">
                    <img src={manage} alt="" className='w-81 md:w-80' />
                    <div className='text-white flex justify-between mt-6'>
                        <div>
                            <h3 className='ml-1 text-blue font-extrabold text-2xl'>Managing</h3>
                        </div>
                        <div className="">
                            <h2 className='mr-10 cursor-pointer text-xl hover:text-blue transition duration-500 ease-in-out'>CodeLive</h2>
                        </div>
                    </div>
                    <h5 className='text-white py-4 text-lg'> A simple project with aim of bringing everyone together to bulid a better products. mange makes it simpler for software teams  to plan day-day task.</h5>
                    
                    
                </div>
                {/* <div>
                    <img src={hey} alt=""  />
                    <div>
                        <div>
                            <h3>HeyWallet</h3>
                        </div>
                        <div>
                            <h2>CodeLive</h2>
                        </div>
                    </div>
                    <h5 className='text-white py-4 text-lg'> A simple project with aim of bringing everyone together <br /> to bulid a better products. mange makes it simpler for<br /> software teams to plan day-day task.</h5>
                    
                    
                </div> */}
            </div>
        </div>
    </div>
                    

                
                    

                
                    

               
                    

                
    
  )
}

export default Projects