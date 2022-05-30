import React from 'react'
import AboutPage from '../Components/About.js/About'
import Seo from '../Components/Seo/Seo';
const about = () => {
  return (
    <>
      <Seo SeoTitle={"About"} />
    
      <AboutPage />
    </>
  )
}

export default about