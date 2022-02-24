
import NavBar from '../Components/NavBar/NavBar';
import HomeComp from '../Components/Home/Home';
import { ButtonComp } from '../Components/Button/Button';
import Seo from '../Components/Seo/Seo';
import Footer from '../Components/Footer/Footer';
import React, { useState } from 'react'

export default function Home() {
  const [state, setstate] = useState(true)
  return (
    <>
      <body className={state ? "bg-white text-black" : "dark:bg-slate-900 dark:text-white"}>
      <Seo/> 
      <NavBar btn={()=>setstate(!state)}  />
      <HomeComp />
        <ButtonComp />
      <Footer />
      </body>
    </>
  )
}
