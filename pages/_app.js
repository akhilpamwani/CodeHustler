import '../styles/globals.css'
import React, { useState,useEffect } from 'react'

import Footer from '../Components/Footer/Footer';
import NavBarPc from '../Components/NavBar/NavBarPc';
import NavResp from '../Components/NavBar/NavResp';
// import 'aos/dist/aos.css'


// import 'react-toastify/dist/ReactToastify.css';



function MyApp({ Component, pageProps }) {
 
  const [state, setstate] = useState(true)
 
  
  
  return (  
  <>
  
   {/* <main className={state ? " bg-white text-black" : "bg-slate-900 text-white"}> */}
    <Component {...pageProps}  />
    <NavBarPc btn={() => setstate(!state)} />
    <NavResp btn={() => setstate(!state)}/>
    <Footer/>
  {/* </main> */}

  </>
     
        
 
  )}

export default MyApp
