import React from 'react'
import { ButtonBlueComponent } from '../Components/Button/Link/ButtonBlueComponent'

 const ErrorPage = () => {
  return (
      <>
          <div className="flex flex-col justify-center mt-28 items-center m-auto w-full">
              <div className="flex flex-row mb-12">
              
              <h4 className="text-4xl font-sans font-bold"> 404 | </h4> <span className='text-md mt-2 whitespace-pre'>  This page could not be found</span></div>
              <ButtonBlueComponent ButtonBlue={"Go Back"} connect={'/'} />
          </div>
      
      
      </>
  )
}
export default ErrorPage