import React from 'react'
import Image from 'next/image'
import HrComponent from '../HrComponent/HrComponent'
import { ButtonBlueComponent } from '../Button/WithOutLink/ButtonBlueComponent'


const Blogs = () => {
  return (
      <>
      <HrComponent Heading={ 'Blogs'}/>
      <div className="flex flex-col "data-aos="fade-up-right">
        <div className="flex  mx-auto flex-col  w-3/5 h-3/5 mb-8 border-2 rounded-md border-blue-500 ">
         <h3 className='flex justify-center text-center m-auto text-2xl mt-2 mb-2 font-extrabold font-serif'>Next Js Crash Course</h3>
          <div className="flex w-4/5   my-12 justify-center items-center content-center   m-auto">
            <Image src='/Blog.jpg' className=' w-40 h-64' alt='' width={300} height={250} /></div> 
          <p className='m-5 '>Next Js is react based framework that solves the problem of seo friendlness and provides some features that help web developers to create websites easy and to manage it easily. </p>
          <div className="flex flex-auto mt-5 mb-5 mx-5 m-auto justify-center mt">
            <ButtonBlueComponent ButtonBlue={ 'Read More'} connect={'/'}/>
   
          </div>
          
        </div>
        
   </div>
      </>
  )
}

export default Blogs