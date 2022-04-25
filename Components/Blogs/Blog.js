import React,{useState,useEffect} from 'react'
import HrComponent from '../HrComponent/HrComponent'
import { ButtonBlueComponent } from '../Button/Link/ButtonBlueComponent'
import axios from 'axios'

export async function getServerSideProps(context) {
    
 

    const data = await axios.get('http://localhost:8000/BlogRead')
  
    const allBlogs = await data.json()
    if (!allBlogs) {
        return {
          notFound: true,
        }
      }
    return {
props: { allBlogs },
        
        
    }
}


export const Blog = ({allBlogs}) => {


    const [getData, setgetData] = useState()
 
//   useEffect(() => {
    
//         axios.get('http://localhost:8000/BlogRead')
//             .then((response) => {
//             setgetData(response.data)
//             }).catch((error) => {
//             console.log(error)
//         })
    
      
//     }, [])
  
  return (
      <>
          <HrComponent Heading={ 'Blogs'}/>
      <section className="text-inherit body-font">
   
  <div className="container px-5 py-24 mx-auto">
                   <div className="flex flex-wrap -m-4">
                      {  allBlogs.map((data) => {   {/** At the place of this if a use this code     {  allBlogs?.map((data) => {
                          
                        OR 
                           { allBlogs && allBlogs.map((data) => {
                        It does not shows me the blogpost that are saved.
                        
                        */}  
                          return (
                              
                          <div className="p-4 lg:w-1/3" key={data.Title}>
                              <div className="h-full bg-inherit bg-opacity-75 px-8 pt-16 pb-24 rounded-lg  border-2  border-blue-500 overflow-hidden text-center relative">
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
