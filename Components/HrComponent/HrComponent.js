import React from 'react'

const HrComponent = (props) => {
  return (
      <>
      <div className="flex flex-col footer w-full   h-60   text-inherit bg-inherit content-center  justify-center  items-center text-center" data-aos="fade-up">
        <hr className=' w-52 text-inherit h-12 font-bold bg-inherit m-5'/>
        <hr className=' w-52 text-inherit bg-inherit m-5'/>
              <h1 className='font-bold text-3xl  uppercase font-sans'>{ props.Heading}</h1>
        <hr className=' w-52 text-inherit bg-inherit m-5'/>
        <hr className=' w-52 text-inherit bg-inherit m-5 mb-12' />
      </div>
      
      </>
  )
}

export default HrComponent