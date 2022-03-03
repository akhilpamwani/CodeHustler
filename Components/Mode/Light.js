import React from 'react'

const LightMode = (props) => {
  return (
      <>
      <div  className="flex cursor-pointer"  onClick={props.changeSvg}>
            <svg xmlns="http://www.w3.org/2000/svg"   className="h-6 Menu w-6 m-auto mx-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg></div>
      </>
  )
}

export default LightMode