import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import Seo from '../../Components/Seo/Seo';

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:8000/BlogRead");
  const data = await res.json();

  const paths = data.map(datafetch => {
    return {
      params: {
        slugify: datafetch.slug.toString(),
        
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
//  const slug = context.params.slugify;
  const slug = context.params.slugify;
  const res = await fetch('http://localhost:8000/BlogRead/'+slug);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};


const slugify = ({ datafetch }) => {
  const { slug, Title, Paragraph } = datafetch;
//   const [getData, setgetData] = useState([])
//   const router=useRouter()
//   useEffect(() => {
//     if (!router.isReady) return;
//     const { slug } = router.query;
    
//       axios.get(`http://localhost:8000/BlogReadOne/${slug}`)
//         .then((response) => {
//           // router.push(`/blogsingle?${getData.slug}`)
//           setgetData(response.data)
//         }).catch((error) => {
//           console.log(error)
//         })
    

  
// }, [router.isReady])
  return (
    <>
      <Seo Title={Title}/>
      <div className='text-center text-inherit bg-inherit w-full mt-40 ' > 
       

          <h1 className='text-3xl font-semibold'>{Title }</h1>
          <p className='text-xl font-medium'>{Paragraph }</p>
          <p className='text-xl font-medium hidden'>{slug }</p>
             </div>
        
        
      
      </>
  )
}



export default slugify