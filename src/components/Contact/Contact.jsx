import React from 'react'

const Contact = () => {
  return (
    <div className=''>
        
        <div className='md:h-131 xl:h-141 h-128 bg-black'>
             <h2 className='text-center text-4xl text-blue pt-48 pb-10 font-extrabold'>Contacts</h2>
            <div className='flex justify-between items-center flex-col xl:flex-row'>

                
                <div className=''>
        
                    <div  className='py-16 text-center' data-aos="fade-up" data-aos-delay="200">
                        
                        <h2 className='md:text-5xl text-3xl  font-bold text-white mx-16 xl:mx-6 2xl:mx-16'>Have a Project?</h2>
                        <h2 className='text-5xl font-bold text-white mx-16  py-4'>Let's Talk!</h2>
                    </div>
                </div>
                <div className='' data-aos="fade-up" data-aos-delay="400">

                    <form action="" className='md:w-96 ml-8 lg:mr-16 md:mr-10 '>
                        <input type="text" placeholder='Enter your Name' className='py-4 w-80 md:w-full my-4 px-2 rounded-md text-black' required /> <br />
                        <input type="text" placeholder='Enter your Email' className='py-4 px-2 my-4 w-80  md:w-full rounded-md text-black' required />
                        <textarea name="message" id=""  placeholder="Message" rows="6" className=' px-2 mr-6 w-80  md:w-full rounded-md text-black'></textarea>
                        
                    </form>
                    <button className='bg-blue mt-4 ml-7 transition duration-500 ease-in-out text-black py-2 px-6 rounded-md font-bold'>Submit</button>

                </div>
                

            </div>
              

        </div>
       
    </div>
  )
}

export default Contact