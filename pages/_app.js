import '../styles/globals.scss'
import React, { useState } from 'react'
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
function MyApp({ Component, pageProps }) {
  const [state, setstate] = useState(true)
  return(  
    <main className={state ? "bg-white text-black" : "dark:bg-slate-900 dark:text-white"}>
<NavBar btn={()=>setstate(!state)} />
      <Component {...pageProps} />
      <Footer/>
        
 </main>

  )}

export default MyApp
