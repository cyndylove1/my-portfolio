import React from 'react'
import hey from '../images/hey pics.PNG'
import manage from '../images/Capture.PNG'
import gammer from '../images/gammers.PNG'
import antic from '../images/antic.PNG'
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className='bg-black'>
        <div>
            <h2 className="text-center text-4xl text-blue py-4 font-extrabold md:pt-36 pt-48 pb-10">Projects</h2>
        </div>
        <div>
            <div className='grid md:grid-cols-2 md:ml-6 gap-4 grid-cols-1 2xl:mx-16 mx-4 pb-20'>
                <div className=''>
                    <img src={hey} alt="" className=' w-81 md:w-80' data-aos="fade-up" data-aos-duration="300"/>
                    <div className='text-white  '>
                        <div className='flex justify-between mt-6' data-aos="fade-up" data-aos-duration="300">
                            <div className=''>
                                <h3 className='ml-1 text-blue font-extrabold text-2xl'>HeyWallet</h3>
                            </div>
                            <div className='mr-10'>
                                <a href="https://hey-app-cyan.vercel.app/"><h2 className='cursor-pointer text-xl hover:text-blue transition duration-500 ease-in-out'>View Live</h2></a>
                            </div>
                            

                        </div>
                        <div>
                            <h5 className='text-white py-4 text-lg' data-aos="zoom-in" data-aos-delay="200"> A simple project with aim of bringing everyone together  to bulid a better products. mange makes it simpler for software teams to plan day-day task.</h5>
                                
                            </div>
                       
                    </div>
                    
                    
                    
                </div>
                <div className="">
                    <img src={gammer} alt=""  className='w-81 md:w-80'  data-aos="fade-up" data-aos-duration="300"/>
                    <div className='text-white flex justify-between mt-6'  data-aos="fade-up" data-aos-duration="300">
                        <div className=''>
                            <h3 className='ml-1 text-blue font-extrabold text-2xl'>Game Zone</h3>
                        </div>
                        <div>
                            <a href="https://gammers-zone.netlify.app/"><h2 className='mr-10 cursor-pointer text-xl hover:text-blue transition duration-500 ease-in-out'>View Live</h2></a>
                        </div>
                    </div>
                    <h5 className='text-white py-4 text-lg' data-aos="zoom-in" data-aos-delay="300"> A game zone application which a player can compete  with Rakuto in this immense challenge and be the winner of all time. </h5>
                   
                    
                    
                </div>
                <div>
                    <img src={antic} alt=""  className='w-81 md:w-80'  data-aos="fade-up" data-aos-duration="300"/>
                    <div className='text-white flex justify-between mt-6'  data-aos="fade-up" data-aos-duration="300">
                        <div>
                            <h3 className='ml-1 text-blue font-extrabold text-2xl'>Antic</h3>
                        </div>
                        <div className="">
                           <a href="https://cyndyantic.netlify.app/"><h2 className='mr-10 cursor-pointer text-xl hover:text-blue transition duration-500 ease-in-out'>View Live</h2></a> 
                        </div>
                    </div>
                    <h5 className='text-white py-4 text-lg'  data-aos="zoom-in" data-aos-delay="400"> A simple interior and exterior projects design, displaying of beautiful  interior and exterior decoration room. </h5>
                    
                    
                </div>
                <div className="">
                    <img src={manage} alt="" className='w-81 md:w-80'  data-aos="fade-up" data-aos-duration="300" />
                    <div className='text-white flex justify-between mt-6'  data-aos="fade-up" data-aos-duration="300">
                        <div>
                            <h3 className='ml-1 text-blue font-extrabold text-2xl'>Managing</h3>
                        </div>
                        <div className="">
                           <a href="https://work-by-cyndy.netlify.app/"><h2 className='mr-10 cursor-pointer text-xl hover:text-blue transition duration-500 ease-in-out'>View Live</h2></a> 
                        </div>
                    </div>
                    <h5 className='text-white py-4 text-lg'  data-aos="zoom-in" data-aos-delay="500"> A simple project with aim of bringing everyone together to bulid a better products. mange makes it simpler for software teams  to plan day-day task.</h5>
                    
                    
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
            {/* <div class="w-full h-1 bg-gradient-to-r from-black to-white"></div> */}
        </div>
    </div>
                    

                
                    

                
                    

               
                    

                
    
  )
}

export default Projects