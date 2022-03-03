import React from 'react'

import { ButtonBlueWithOutLinkComponent } from '../Button/Link/ButtonBlueWithOutLink'
import HrComponent from '../HrComponent/HrComponent'
export const Contact = () => {
  return (
    <>
                <HrComponent Heading={ 'Contact'}/>
          <div className="flex flex-col m-auto justify-center items-center w-9/12 mt-10 content-center   border-2 border-blue-500 rounded-md" data-aos="zoom-in-down">
              <label htmlFor="Name" className="text-sm text-center  my-5 font-semibold font-sans" >Name</label>
              <input type='text' className='bg-inherit outline-none  border-2 rounded-md border-blue-500 w-80 text-center Form-input'placeholder='Enter Your Name'/>
              <label htmlFor="Email" className="text-sm text-center  my-5 font-semibold font-sans" >Email</label>
              <input type='email' className='bg-inherit outline-none  border-2 rounded-md border-blue-500 w-80 text-center Form-input'placeholder='Enter Your Email'/>
              <label htmlFor="Subject" className="text-sm text-center  my-5 font-semibold font-sans" >Subject</label>
              <input type='text' className='bg-inherit outline-none  border-2 rounded-md border-blue-500 w-80 text-center Form-input'placeholder='Enter Your Subject'/>
              <label htmlFor="Detail" className="text-sm text-center  my-5 font-semibold font-sans">Explain Your Subject in detail</label>
              <textarea name="" id="" cols="30"  className='bg-inherit   outline-none border-2 rounded-md border-blue-500 w-80 text-center Form-input' rows="10" placeholder='Enter Your Subject and explain it in detail '></textarea>
            <div className='inherit my-5'>
              <ButtonBlueWithOutLinkComponent ButtonBlue={"Send"} />
              </div>
          </div> 
      
      </>
  )
}
