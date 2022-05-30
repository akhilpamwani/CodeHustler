import '../styles/globals.scss'
import React, { useState,useEffect } from 'react'

import Footer from '../Components/Footer/Footer';
import NavBarPc from '../Components/NavBar/NavBarPc';
import NavResp from '../Components/NavBar/NavResp';
import 'aos/dist/aos.css'
import Aos from 'aos'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  const [state, setstate] = useState(true)
  
  useEffect(() => {
   
    Aos.init({
      anchorPlacement: 'top-bottom',
      duration: 1000,
      easing: 'ease-in-out',
      
      delay: 100,
      
    })
  
    
  },
  []);
  return(  
    <main className={state ? " bg-white text-black" : "bg-slate-900 text-white"}>
      <NavBarPc btn={() => setstate(!state)} />
      <NavResp btn={() => setstate(!state)}/>
      <Component {...pageProps} />
      
      <Footer/>
        
 </main>

  )}

export default MyApp
