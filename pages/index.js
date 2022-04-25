import HomeComp from '../Components/Home/Home';
import Seo from '../Components/Seo/Seo';
import React from 'react'
import { ButtonGradientWithOutLinkComponent } from '../Components/Button/WithOutLink/ButtonGradientWithoutLinkComponent';
import { ButtonBlueWithOutLinkComponent } from '../Components/Button/WithOutLink/ButtonBlueWithOutLink';

import About from '../Components/About.js/About';
import { Contact } from "../Components/Contact/Contact";
import { Blog } from '../Components/Blogs/Blog';

export default function Home() {
  
  return (
    <>
   
      <Seo SeoTitle={ "Home"}/> 
      <HomeComp />
      <div className="flex flex-auto mt-5 mx-5 m-auto justify-center"data-aos="fade-up">
      <ButtonGradientWithOutLinkComponent ButtonGradient={'Popular Blogs'} />
        <ButtonBlueWithOutLinkComponent ButtonBlue={'Recents Blogs'} /></div>
   <About/>
      <Blog />
      <Contact/>
     
      
    </>
  )
}
