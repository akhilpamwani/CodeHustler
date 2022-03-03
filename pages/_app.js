import '../styles/globals.scss'
import React, { useState,useEffect } from 'react'

import Footer from '../Components/Footer/Footer';
import NavBarPc from '../Components/NavBar/NavBarPc';
import NavResp from '../Components/NavBar/NavResp';
import 'aos/dist/aos.css'
import Aos from 'aos'
function MyApp({ Component, pageProps }) {
  const [state, setstate] = useState(false)
  useEffect(() => {
    Aos.init({
      anchorPlacement: 'top-bottom',
      delay:"10000ms",
      
    })
    
    
  },
  []);
  return(  
    <main className={state ? "bg-white text-black" : "dark:bg-slate-900 dark:text-white"}>
      <NavBarPc btn={() => setstate(!state)} />
      <NavResp btn={() => setstate(!state)}/>
      <Component {...pageProps} />
      <Footer/>
        
 </main>

  )}

export default MyApp
