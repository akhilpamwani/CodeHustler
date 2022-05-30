import HomeComp from '../Components/Home/Home';
import Seo from '../Components/Seo/Seo';
import React from 'react'
import { ButtonGradientWithOutLinkComponent } from '../Components/Button/WithOutLink/ButtonGradientWithoutLinkComponent';
import { ButtonBlueWithOutLinkComponent } from '../Components/Button/WithOutLink/ButtonBlueWithOutLink';
import About from '../Components/About.js/About';
import { Contact } from "../Components/Contact/Contact";


export default function Home() {
  
  return (
    <>
   
      <Seo SeoTitle={"Home"} />
      <div className=' relative top-52  mb-80'>
      <HomeComp />
      <div className="flex flex-auto  mx-5 m-auto justify-center"data-aos="fade-up">
      <ButtonGradientWithOutLinkComponent ButtonGradient={'Popular Blogs'} />
        <ButtonBlueWithOutLinkComponent ButtonBlue={'Recents Blogs'} /></div></div>
   <About/>
      
      <Contact/>
     
      
    </>
  )
}
