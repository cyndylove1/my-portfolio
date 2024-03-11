import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
// import { SiConstruct3 } from "react-icons/si";
import { SiConekta } from "react-icons/si";
// import { FaBarsStaggered } from "react-icons/fa6"; 
 import { LiaTimesSolid } from "react-icons/lia"
 import { AiOutlineMenuUnfold } from "react-icons/ai";




const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const handleClick = () => {
    setMenu(!menu)

  }
  // const closeMenu = () => {
  //   setMenu(false)

  // }
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
    <div className={header ? 'z-50 w-full text-white bg-black':'text-white bg-black'}>
      <div className= 'header flex items-center justify-between w-full h-20 z-50 bg-black fixed'>
        <div className='flex items-center justify-center '>
          <div className=' ml-4 text-xl font-extrabold text-white 2xl:ml-14 '><span className='text-blue inline-block pr-2 text-xl'><SiConekta /></span>CYNDY.</div>
          
        </div>
        <nav className=' md:flex hidden py-6 md:mr-6 '>
          <ul className='flex items-center font-bold cursor-pointer'>
            <Link to="hero" spy={true} smooth={true} duration={500} className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out'>Home</Link>
            <Link to="about" spy={true} smooth={true} duration={500} className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out'>About</Link>
            <Link to="services" spy={true} smooth={true} duration={500} className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out'>Services</Link>
            <Link to="skill" spy={true} smooth={true} duration={500} className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out'>Skills</Link>
            <Link to="projects" spy={true} smooth={true} duration={500} className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out'>Projects</Link>
            <Link to="contact" spy={true} smooth={true} duration={500} className='hover:text-blue xl:mr-10 md:mr-4  transition duration-500 ease-in-out'>Contacts</Link>
            <Link to='contact'><button className='border-blue transform-translate-y-14 hover:scale-110 px-6 py-2 text-white transition duration-500 ease-in-out bg-transparent border-2 rounded-md'>Let's Talk!</button></Link>
          </ul>
       
        
        </nav>
        
        <div className='md:hidden flex items-center mr-7'>
          {menu ?
            (<LiaTimesSolid size={25} onClick={handleClick}/>
            ):(
              <AiOutlineMenuUnfold size={25} onClick={handleClick}/>

            )}

         
        </div>
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-white text-black left-0 top-20 pt-8 pb-4 gap-8 w-full h-fit items-center transition-transform duration font-bold  cursor-pointer`}>
        {/* <ul className='flex items-center font-bold cursor-pointer'> */}
            <Link to="hero" spy={true} smooth={true} duration={500} className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out'>Home</Link>
            <Link to="about" spy={true} smooth={true} duration={500} className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out'>About</Link>
            <Link to="services" spy={true} smooth={true} duration={500} className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out'>Services</Link>
            <Link to="skill" spy={true} smooth={true} duration={500} className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out'>Skills</Link>
            <Link to="projects" spy={true} smooth={true} duration={500} className='hover:text-blue xl:mr-10 md:mr-4 transition duration-500 ease-in-out'>Projects</Link>
            <Link to="contact" spy={true} smooth={true} duration={500} className='hover:text-blue xl:mr-10 md:mr-4  transition duration-500 ease-in-out'>Contacts</Link>
            <Link to='contact'><button className='border-blue transform-translate-y-14 hover:scale-110 px-6 py-2 text-black md:text-white transition duration-500 ease-in-out bg-transparent border-2 rounded-md'>Let's Talk!</button></Link>
          {/* </ul>/ */}
          


        </div>
      </div>
    </div>
  )
}

export default Navbar