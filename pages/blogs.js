import React from 'react'
import { Blog }  from '../Components/Blogs/Blog';

import Seo from '../Components/Seo/Seo';
const blogs = () => {
  return (
    <>
      <Seo SeoTitle={ "Blogs"}/> 
      
      <Blog/>
      </>
  )
}

export default blogs