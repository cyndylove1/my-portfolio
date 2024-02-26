import React from 'react'
import girl from '../images/pngwing.com (3).png'
import blob from "../images/blob (7).svg"
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const PDF_URL = 'http://localhost:3000/Resume.pdf'





const Hero = () => {
  const downloadFile = (url) =>{
    fetch(url)
    .then((response)=> response.blob())
    .then((blob)=>{
    const blobURL =window.URL.createObjectURL(new Blob([blob]));
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = blobURL;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove()

    })
    
  }
 
  return (
    <div className='bg-black md:h-140 h-129 pt-16'>
      
        <div className='justify-evenly md:flex-row flex flex-col items-center'>
           
        <div className=' mx-6 xl:mr-32'>
         
          
          <div className='' data-aos="fade-up" data-aos-delay="200">
              <h5 className='py-4 text-2xl font-bold text-white '>Hi, I'm Cynthia Nweke</h5>
              <h1 className=' pb-2 text-5xl font-bold text-white '> <span className='text-blue'>SoftWare</span> <span className='text-purple'>Developer.</span></h1>
              <h6 className='font-bold text-justify text-white  '>I am a Software Developer, I can provide clean code and pixel perfect design.</h6>

              <button className='bg-blue transform-translate-y-14 hover:scale-110 px-4 py-2 mt-2 font-bold text-black transition duration-500 ease-in-out rounded-md'onClick={()=>{downloadFile(PDF_URL)}}> Download Cv</button>

              <div className='inline-block cursor-pointer flex '>
               <a href="https://github.com/cyndylove1"><h2 className='text-blue transform-translate-y-14 ml-4 mt-2 hover:scale-110 py-2 text-2xl transition duration-500 ease-in-out'><FaGithub /></h2> </a> 
                <a href="https://twitter.com/cyndynweke81"><h2 className='text-blue transform-translate-y-14 ml-4 mt-2 hover:scale-110 py-2 text-2xl transition duration-500 ease-in-out'><FaTwitter /></h2></a>
                <a href="https://linkedin.com/in/cyndylove1"><h2 className='text-blue transform-translate-y-14 ml-4 mt-2 hover:scale-110 py-2 text-2xl transition duration-500 ease-in-out'><FaLinkedin /></h2></a>

            </div>
                
              
            </div>

        </div>

          
          
          
          <div className='w-80 md:w-77 xl:w-96 mr-5 h-96 translate-x-100 translate-z-0 relative mb-10' data-aos="zoom-in" data-aos-delay="400">
            
             <img src={blob} alt=""className='absolute mt-14' />
             
             

      
              <img src= {girl} alt="" className=' absolute '  />
              
            
          </div>
         
          
         
       
        </div>
        {/* <div class="w-full h-1 bg-gradient-to-r from-black to-white"></div> */}
        <div>
          
        
      </div>
      
        
    </div>
  )
}

export default Hero