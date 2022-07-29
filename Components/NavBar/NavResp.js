import React,{useState} from "react";
import Mode from '../Mode/Mode';
import Image from 'next/image'
import Link from 'next/link';

const NavResp = (props) => {
 
   
  
    const [state, setstate] = useState(true) 
  return (
      <>
      <nav className={state ? "flex flex-row justify-center   w-full shadow-lg  Nav  shadow-blue-500 z-50  h-20   bg-inherit" : "flex   flex-row justify-center   w-full shadow-lg  Nav  shadow-blue-500 z-50     bg-inherit h-65"}>
        <div className= {state ?'text-center Nav-Logo-Div  ml-2   justify-center flex':"text-center  ml-5  mt-0   justify-center flex"}>
          <li className={state ? 'list-none text-center items-center m-auto justify-center flex font-semibold  font-serif text-inherit Nav-Logo text-md' : 'list-none text-center mt-8  justify-center flex font-semibold  font-serif text-inherit text-md '}><Link href='/'>Code Hustlers</Link></li>
            </div>
        <ul className={state ? "hidden justify-center m-auto  my-5 z-50" : "flex flex-col justify-center  mt-32 m-auto  my-5 z-50"} >
                <li className=" list-none mx-2 hover:bg-gradient-to-r hover:from-blue-400  p-1.5 hover:to-blue-500 cursor-pointer  hover:rounded hover:text-white font-medium Lobster" onClick={()=>setstate(!state)}  ><Link href='/'>Home</Link></li>
                <li className=" list-none mx-2 hover:bg-gradient-to-r hover:from-blue-400  p-1.5 hover:to-blue-500 cursor-pointer  hover:rounded hover:text-white font-medium Lobster" onClick={()=>setstate(!state)} ><Link href='/about'>About</Link></li>
                <li className=" list-none mx-2 hover:bg-gradient-to-r hover:from-blue-400  p-1.5 hover:to-blue-500 cursor-pointer  hover:rounded hover:text-white font-medium Lobster" onClick={()=>setstate(!state)} ><Link href='/blogs'>Blogs</Link></li>
                <li className=" list-none mx-2 hover:bg-gradient-to-r hover:from-blue-400  p-1.5 hover:to-blue-500 cursor-pointer  hover:rounded hover:text-white font-medium Lobster" onClick={()=>setstate(!state)} ><Link href='/contact'>Contact</Link></li>
            </ul>
                
            {/* <div onClick={props.btn} className="flex">
              <Mode/>
                    </div> */}
                  <div className="w-12 h12 mt-4 unset">
            <Image src="/menu.png" alt='' width="48" height="48"  onClick={()=>setstate(!state)}  className="h-12 w-12 m-1 image flex  justify-end content-end items-end mt-5"></Image> 
            </div>  </nav>
      
      </>
  )
}

export default NavResp