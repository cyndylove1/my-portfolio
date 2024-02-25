import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHeart } from "react-icons/fa"


const Footer = () => {
  return (
    <div>
        <div className='bg-blue h-34'>
            <div className='text-center py-6 text-black'>
                <h2 className='text-2xl font-bold '>Nweke Cynthia</h2>
                <h5 className=''>Designed with <span className='inline-block w-4 text-xs text-red'><FaHeart /></span>, All right reserved for Nweke Cynthia.</h5>

                <div className='flex justify-center cursor-pointer pt-2'>
                  <h2 className='mx-2 text-2xl  py-2 text-2xl transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out'><FaGithub /></h2> 
                  <h2 className='mx-2 text-2xl  py-2 text-2xl transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out'><FaTwitter /></h2>
                  <h2 className=' mx-2 text-2xl  py-2 text-2xl transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out'><FaLinkedin /></h2>

            </div>

            </div>
            
            
        </div>
    </div>
  )
}

export default Footer