
import React,{useState,useEffect} from 'react'
import HrComponent from '../Components/HrComponent/HrComponent'
import { ButtonBlueComponent } from '../Components/Button/Link/ButtonBlueComponent'


import Seo from '../Components/Seo/Seo';
const blogs = ({data}) => {
  return (
    <>
      <Seo SeoTitle={ "Blogs"}/> 
      
     <HrComponent  Heading={ 'Blogs'}/>
      <section className="text-inherit body-font">
   
  <div className="container px-5 py-24 mx-auto">
                   <div className="flex flex-wrap -m-4">
            {data.slice(0,12).map((data) => {   
                          return (
                              
                          <div className="p-4 lg:w-1/2 blog-resp" key={data.Title}>
                              <div className="h-full bg-inherit bg-opacity-75 blog_resp px-8 pt-16 pb-24 rounded-lg  border-2  border-blue-500 overflow-hidden text-center relative">
                                  <h1 className="title-font sm:text-2xl text-xl font-medium text-inherit mb-3">{data.Title}</h1>
                                  <p className="leading-relaxed mb-3">{data.Paragraph}</p>
                                
                                  <div className='justify-center m-auto flex'>
                                      <ButtonBlueComponent connect={`/blogpost/${data.slug}`} ButtonBlue={'Read More'}></ButtonBlueComponent>
                                  </div>  </div>
                          </div>
                          )
                      })
                       
                      }
                    </div>
                  </div>
</section>
      
      </>
  )
}
export const getServerSideProps= async()=> {
    
 


  const res = await fetch(process.env.NEXT_PUBLIC_BLOG_READ_API_URL)
  const  data= await res.json();
  return {
    props: {
data
    }
    }
   
}
export default blogs