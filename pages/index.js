

import HomeComp from '../Components/Home/Home';
import { ButtonComp } from '../Components/Button/Button';
import Seo from '../Components/Seo/Seo';

import React from 'react'

export default function Home() {
  
  return (
    <>
   
      <Seo/> 
      
      <HomeComp />
        <ButtonComp />
     
      
    </>
  )
}
