import { MenuIcon, XIcon } from '@heroicons/react/solid';
import React, { useState } from "react";
import { } from 'react-icons/fa';
import CustomLink from "../Customlink/CustomLink";
const Header = () => {
  const [open,setOpen] = useState(false)
  return (
    <div className="">
      <div onClick={()=> setOpen(!open)} className='h-6 w-6 md:hidden'>{open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}</div>
      <div className={`md:flex justify-center  absolute w-full duration-500 ease-in-out md:static ${open ?"top-6" :"top-[-200px]"}`}>
      <CustomLink className="text-lg font-semibold md:mx-4 " to="/">Home</CustomLink>
       <CustomLink className='text-lg font-semibold' to='review'> Reviews</CustomLink>
      </div>
    </div>
  );
};

export default Header;
