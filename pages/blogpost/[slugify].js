import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
const slugify = () => {
  const [getData, setgetData] = useState([])
  const router=useRouter()
  useEffect(() => {
    if (!router.isReady) return;
    const { slug } = router.query;
    
      axios.get(`http://localhost:8000/BlogReadOne/${slug}`)
        .then((response) => {
          // router.push(`/blogsingle?${getData.slug}`)
          setgetData(response.data)
        }).catch((error) => {
          console.log(error)
        })
    

  
}, [router.isReady])
  return (
    <>
     
      <div className='text-center text-inherit bg-inherit w-full mt-40 ' > 
       

          <h1 className='text-3xl font-semibold'>{getData.Title }</h1>
          <p className='text-xl font-medium'>{getData.Paragraph }</p>
        
             </div>
        
        
      
      </>
  )
}

export default slugify