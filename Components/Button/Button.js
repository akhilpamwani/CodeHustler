import React from 'react'


export const ButtonComp = () => {
    return (<>
            <div className="   mt-8 flex w-full justify-center items-center  ">
      
           <button className=' cursor-pointer bg-gradient-to-r Roboto to-indigo-500 via-fushia-500 hover:contrast-150 from-pink-500 text-white m-auto relative  hover:from-transparent hover:via-transparent hover:border-2 hover:to-transparent hover:text-yellow-700 hover:rounded-xl hover:border-yellow-700 hover:border-solid top-0 right-0  left-0 w-32 h-10 rounded-lg justify-center block mx-2 font-bold ' >Popular Blogs</button> 
        
            <button className='border-blue-500 border-2  m-autoborder-solid hover:contrast-150 left-0 right-0  relative top-0 hover:bg-blue-500 hover:text-white cursor-pointer hover:border-0 text-blue-500 w-32 h-10 rounded-xl justify-center block mx-2 font-bold'> Recent Blogs</button> 
     
     
      </div>
      </>
  )
}
