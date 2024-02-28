import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { SiConstruct3 } from "react-icons/si";
import { SiConekta } from "react-icons/si";




const Navbar = () => {
  const [header, setHeader] = useState(false)
   const scrollHeader = ()=>{
    if(window.scrollY >= 20){
      setHeader(true)
    }else{
      setHeader(false)
    }

   }
   useEffect (()=> {
    window.addEventListener('scroll', scrollHeader)
    return ()=>{
      window.addEventListener('scroll', scrollHeader)
    }

   },[]);
  return (
    <div className={header ? 'z-50 w-full text-white bg-black':' text-white bg-black'}>
      <div className= 'header flex items-center justify-between w-full h-20 z-50 bg-black fixed'>
        <div className='flex items-center justify-center '>
          <div className=' ml-6 text-xl font-extrabold text-white 2xl:ml-16 '><span className='text-blue inline-block pr-2 text-xl'><SiConekta /></span>CYNDY.</div>
          
        </div>
        <div className=' md:flex hidden py-6 md:mr-6 '>
          <ul className='flex items-center font-bold cursor-pointer'>
            <li><Link to="/" className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out'>Home</Link></li>
            <li><Link to="/About" className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out'>About</Link></li>
            
            
            <Link to="/services" className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out'>Services</Link>
            <Link to="/Skill" className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out'>Skills</Link>
            <Link to="/Projects" className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out'>Projects</Link>
            <Link to="/Contact" className='hover:text-blue xl:mr-10 md:mr-4  transition duration-500 ease-in-out'>Contacts</Link>
            <button className='border-blue transform-translate-y-14 hover:scale-110 px-6 py-2 text-white transition duration-500 ease-in-out bg-transparent border-2 rounded-md'>Let's Talk!</button>
          </ul>
       
        
        </div>
        
        
      </div>
    </div>
  )
}

export default Navbar