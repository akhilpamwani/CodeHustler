import  Link  from 'next/link';

import React,{useState} from "react";
import Mode from '../Mode/Mode';


const NavBarPc = (props) => {

    return <>
      
        <nav className="flex z-50   bg-white text-black  flex-row justify-center   w-full shadow-lg  NavBar  shadow-blue-500      bg-inherit" >
            <div className='text-center  my-auto ml-2  justify-center flex'>
                <li className='list-none text-center items-center m-auto justify-center flex font-semibold  font-serif text-inherit text-lg'><Link href='/'>Code Hustlers</Link></li>
            </div>
            <ul className= "flex flex-row justify-center m-auto  my-5 z-50 Nav-ul">
                <li className=" list-none mx-2 hover:bg-gradient-to-r hover:from-blue-400  p-1.5 hover:to-blue-500 cursor-pointer  hover:rounded hover:text-white font-medium Lobster" ><Link href='/'        >Home</Link></li>
                <li className=" list-none mx-2 hover:bg-gradient-to-r hover:from-blue-400  p-1.5 hover:to-blue-500 cursor-pointer  hover:rounded hover:text-white font-medium Lobster" ><Link href='/about'   >About</Link></li>
                <li className=" list-none mx-2 hover:bg-gradient-to-r hover:from-blue-400  p-1.5 hover:to-blue-500 cursor-pointer  hover:rounded hover:text-white font-medium Lobster" ><Link href='/blogs'   >Blogs</Link></li>
                <li className=" list-none mx-2 hover:bg-gradient-to-r hover:from-blue-400  p-1.5 hover:to-blue-500 cursor-pointer  hover:rounded hover:text-white font-medium Lobster" ><Link href='/contact' >Contact</Link></li>
            </ul>
                
            {/* <div onClick={props.btn} className="flex">
              <Mode/>
                    </div> */}

           
        </nav>
        

    </>;
};

export default NavBarPc;
