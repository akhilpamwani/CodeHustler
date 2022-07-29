import React from "react";
import Link from 'next/link'
const Footer = () => {
    return <>
        <div className="  flex flex-col footer w-full   h-60   text-inherit bg-inherit content-center shadow-blue-400  shadow-inner justify-center  items-center text-center relative top-44 mt-20 ">
            
            <Link href={"/"} passHref><h1 className="  font-bold text-lg footer-h3 cursor-pointer   ">Code Hustlers</h1></Link>
            <p>Created & Managed By Aryan Pamwni</p>
    </div>
    
    
    </>
};

export default Footer;
