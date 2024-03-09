import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaSass } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { SiMongoosedotws } from "react-icons/si";
import { SiMongodb } from "react-icons/si";


const Skill = () => {
  return (
    <div className='bg-black h-141 md:h-140'>
        <h2 className='text-center text-4xl text-blue py-4 font-extrabold pt-56 md:pt-24 pb-16'>Skills</h2>
        <div className='grid md:grid-cols-6 md:gap-4 px-4 gap-5 ml-10  grid-cols-4  ml-2 xl:px-6 2xl:px-12 pb-24 justify-center' data-aos="zoom-in" data-aos-delay="200">
            <div className=' transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out'>
                <h6 className='text-blue text-6xl'><FaHtml5 /></h6>
                <h2 className='text-white md:text-2xl text-base font-bold pt-2'>HTML5</h2>
            </div>
            <div className='transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out'>
                <h6 className='text-blue text-6xl'><FaCss3Alt /></h6>
                <h2 className='text-white md:text-2xl text-base font-bold ml-4'>CSS</h2>
            </div>
            <div className='transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out'>
                <h6 className='text-blue text-6xl'><FaReact /></h6>
                <h2 className='text-white md:text-2xl text-base font-bold'>React</h2>
            </div>
            {/* <div className='transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out '>
                <h6 className='text-blue text-6xl'><IoLogoJavascript /></h6>
                <h2 className='text-white text-base md:text-2xl font-bold'>JavaScript</h2>
            </div> */}
            
            <div className='transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out'>
                <h6 className='text-blue text-6xl'><TbBrandNextjs /></h6>
                <h2 className='text-white md:text-2xl text-base font-bold'>Next Js</h2>
            </div>
            <div className='transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out'>
                <h6 className='text-blue text-6xl'><SiTailwindcss /></h6>
                <h2 className='text-white md:text-2xl text-base font-bold'>Tailwind Css</h2>
            </div>
            
            <div className='transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out '>
                <h6 className='text-blue text-6xl'><IoLogoJavascript /></h6>
                <h2 className='text-white text-base md:text-2xl font-bold'>JavaScript</h2>
            </div>
            <div className='transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out ml-3'>
                <h6 className='text-blue text-6xl'><FaSass /></h6>
                <h2 className='text-white md:text-2xl text-base font-bold '>Sass</h2>
            </div>
            <div className='transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out'>
                <h6 className='text-blue text-6xl'><FaGitAlt /></h6>
                <h2 className='text-white md:text-2xl text-base font-bold ml-4'>Git</h2>
            </div>
            <div className='transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out '>
                <h6 className='text-blue text-6xl'><FaGithub /></h6>
                <h2 className='text-white md:text-2xl text-base font-bold'>Github</h2>
            </div>
            <div className='transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out'>
                <h6 className='text-blue text-6xl'><FaNode /></h6>
                <h2 className='text-white md:text-2xl text-base font-bold'>Node Js</h2>
            </div>
            <div className='transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out'>
                <h6 className='text-blue text-6xl'><SiMongoosedotws /></h6>
                <h2 className='text-white md:text-2xl text-base font-bold'>Mongoose</h2>
            </div>
            <div className='transform-translate-y-14 hover:scale-110 transition duration-500 ease-in-out ml-4'>
                <h6 className='text-blue text-6xl '><SiMongodb /></h6>
                <h2 className='text-white md:text-2xl text-base font-bold'>Mongo DB</h2>
            </div>
            
        </div>
        {/* <div class="w-full h-1 bg-gradient-to-r from-black to-white"></div> */}
    </div>
  )
}

export default Skill