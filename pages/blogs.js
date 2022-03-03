import React from 'react'
import Blogs from '../Components/Blogs/Blogs'
import Seo from '../Components/Seo/Seo';
const blogs = () => {
  return (
    <>
      <Seo SeoTitle={ "Blog"}/> 
      <Blogs/>
      </>
  )
}

export default blogs