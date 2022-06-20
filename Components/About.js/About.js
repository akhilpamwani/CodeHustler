import React from 'react'
import HrComponent from '../HrComponent/HrComponent'
import { ButtonBlueComponent } from '../Button/Link/ButtonBlueComponent'

const AboutPage = () => {
  return (
   
    <>
      
 <HrComponent Heading={'About'}/>
      <div className="flex flex-col justify-center  m-auto w-full  content-center items-center text-center" >
  <p className='text-inherit text-md w-3/5 About-Para-Resp '>Code Hustler is made for the beginners who want to learn coding.This blog is a platform for the peopleto get answers of these questions who have some troubles which making projects and have suffering with error.From this blog you will learn about how to code, how to code fast, how to make code more efficent . Not only this there are courses that will make from to hero in coding.    </p>
        <p className='text-inherit text-lg  mt-4 font-semibold mb-2'>What are you waiting for? </p>
 
          <ButtonBlueComponent ButtonBlue={'Blog'} connect='/blogs' />
      </div>
      </>
    
      )
}

export default AboutPage