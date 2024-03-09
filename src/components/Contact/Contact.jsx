import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nqerapm', 'template_0albnh7', form.current, {
        publicKey: 'oAjyzmxKCMONiqFu2',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            title: "Thank You!",
            text: "Message sent Successfully!",
            icon: "success"
          });
          // alert('message sent')
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            
          });
        },
      );
  };

  return (
    <div className=''>
        
        <div className='md:h-131 xl:h-141 h-128 bg-black'>
             <h2 className='text-center text-4xl text-blue md:pt-48 pt-60 pb-10 font-extrabold'>Contacts</h2>
            <div className='flex justify-between items-center flex-col xl:flex-row'>

                
                <div className=''>
        
                    <div  className='py-16 text-center' data-aos="fade-up" data-aos-delay="200">
                        
                        <h2 className='md:text-5xl text-3xl  font-bold text-white mx-16 xl:mx-6 2xl:mx-16'>Have a Project?</h2>
                        <h2 className='text-5xl font-bold text-white mx-16  py-4'>Let's Talk!</h2>
                    </div>
                </div> 
                <div className='' data-aos="fade-up" data-aos-delay="400">
                
                                    

                    <form ref={form} className='md:w-96 ml-7 lg:mr-16 md:mr-10' onSubmit={sendEmail}>
                        <input type="text" placeholder='Enter your Name' name='from_name' className='py-4 w-80 md:w-full my-4 px-3 rounded-md text-black' autoComplete='off' required/> <br />
                        <input type="email" placeholder='Enter your Email' name='from_email' className='py-4 px-3 my-4 w-80  md:w-full rounded-md text-black' autoComplete='off' required/>
                        <textarea name="message" id=""  placeholder=" Your Message" rows="6" className=' px-2 py-4 mr-6 w-80  md:w-full rounded-md text-black'autoComplete='off' required></textarea>

                        <button type='submit' className='bg-blue mt-4  transition duration-500 ease-in-out text-black py-2 px-6 rounded-md font-bold '>Submit</button>
                        

                        
                    </form>
                    
                </div>
                

            </div>
              

        </div>
       
    </div>
  )
}

export default Contact