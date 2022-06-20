import React from 'react'

import Seo from '../../Components/Seo/Seo';
import ErrorPage from '../404'
export const getStaticPaths = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_BLOG_READ_API_URL);
  const data = await res.json();

  const paths = data.map(datafetch => {
    return {
      params: {
        slugify: datafetch.slug.toString(),// It returns toString is not a function
        
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
  const res = await fetch(process.env.NEXT_PUBLIC_BLOG_SINGLE_API_URL+'/'+slug);

  const getData = await res.json();

  return {
    props: {
      getData,
    },
  };
};


const slugify = ({getData}) => {
 

  return (
    <>
      {getData.slug ?
        <div className='flex-col flex text-center text-inherit bg-inherit w-full  m-auto relative top-36   ' >
          <Seo SeoTitle={`${getData.Title}`} />
       

          <h1 className='text-3xl font-semibold'>{getData.Title}</h1>
          <p className='text-xl font-medium'>{getData.Paragraph}</p>
        
        </div>
        
        :
    <ErrorPage/>
      }
      
      </>
  )
}



export default slugify