import React from 'react'
import girl from '../images/pngwing.com (3).png'
import blob from "../images/blob (7).svg"
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import resume from './'
// const PDF_URL = 'http://localhost:3000/Resume.pdf'





const Hero = () => {
  // const downloadFile = (url) =>{
  //   fetch(url)
  //   .then((response)=> response.blob())
  //   .then((blob)=>{
  //   const blobURL = window.URL.createObjectURL(new Blob([blob]));
  //     const fileName = url.split('/').pop();
  //     const aTag = document.createElement('a');
  //     aTag.href = blobURL;
  //     aTag.setAttribute('download', fileName);
  //     document.body.appendChild(aTag);
  //     aTag.click();
  //     aTag.remove()

  //   })
    
  // }
 
  return (
    <div className='md:h-140 h-128  pt-20 bg-black'>
      
        <div className='justify-evenly md:flex-row  flex flex-col items-center'>
           
        <div className='xl:mr-32  mx-4'>
         
          
          <div className='' data-aos="fade-up" data-aos-delay="200">
              <h5 className=' py-4 text-2xl font-bold text-white'>Hi, I'm Cynthia Nweke</h5>
              <h1 className=' pb-2 text-5xl font-bold text-white'> <span className='text-blue'>SoftWare</span> <span className='text-purple'>Developer.</span></h1>
              <div className=''>
                <h6 className=' font-bold text-justify text-white'>I am a Software Developer, I can provide clean code and pixel perfect design.</h6>

              </div>
              

              <a href="Resume.pdf" download="Resume.pdf"><button className='bg-blue transform-translate-y-14 hover:scale-110 px-4 py-2 mt-2 font-bold text-black transition duration-500 ease-in-out rounded-md'> Download Cv</button></a>

              <div className=' flex inline-block cursor-pointer'>
               <a href="https://github.com/cyndylove1"><h2 className='text-blue transform-translate-y-14 hover:scale-110 py-2 mt-2 ml-4 text-2xl transition duration-500 ease-in-out'><FaGithub /></h2> </a> 
                <a href="https://twitter.com/cyndynweke81"><h2 className='text-blue transform-translate-y-14 hover:scale-110 py-2 mt-2 ml-4 text-2xl transition duration-500 ease-in-out'><FaTwitter /></h2></a>
                <a href="https://linkedin.com/in/cyndylove1"><h2 className='text-blue transform-translate-y-14 hover:scale-110 py-2 mt-2 ml-4 text-2xl transition duration-500 ease-in-out'><FaLinkedin /></h2></a>

            </div>
                
            <a href="Resume.pdf" download="Resume"class="btn">Download Cv</a>
            </div>

        </div>

          
          
          
          <div className='w-81 md:w-77 xl:w-96 h-96 translate-x-100 translate-z-0  relative mr-5' data-aos="zoom-in" data-aos-delay="400">
            
             <img src={blob} alt=""className='mt-14 absolute' />
             
             

      
              <img src= {girl} alt="" className=' absolute'  />
              
            
          </div>
         
          
         
       
        </div>
        
        <div className='pt-15 md:pt-2'>
          
        {/* <div class="w-full h-1 bg-gradient-to-r from-black to-white"></div> */}
      </div>
      
        
    </div>
  )
}

export default Hero