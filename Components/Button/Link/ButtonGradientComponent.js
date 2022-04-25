import React from 'react'
import Link from 'next/link'

export const ButtonGradientComponent = (props) => {
    return (<>
           
      
           <Link href={props.connect} passHref><button className=' cursor-pointer bg-gradient-to-r Roboto to-indigo-500 via-fushia-500 hover:contrast-150 from-pink-500 text-white m-auto relative  hover:from-transparent hover:via-transparent hover:border-2 hover:to-transparent hover:text-yellow-700 hover:rounded-xl hover:border-yellow-700 hover:border-solid top-0 right-0  left-0 w-32 h-10 rounded-lg justify-center block mx-2 font-bold ' >{ props.ButtonGradient}</button> </Link>
        
            
     
     
  
      </>
  )
}
