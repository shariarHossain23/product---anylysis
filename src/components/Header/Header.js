import { MenuIcon, XIcon } from '@heroicons/react/solid';
import React, { useState } from "react";
import { } from 'react-icons/fa';
import CustomLink from "../Customlink/CustomLink";
const Header = () => {
  const [open,setOpen] = useState(false)
  return (
    <div className="shadow p-6">
      <div onClick={()=> setOpen(!open)} className='h-6 w-6 md:hidden'>{open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}</div>
      <div className={`md:flex justify-center absolute  w-3/4 mx-auto duration-500 ease-in-out md:static ${open ?"top-16 bg-indigo-500 text-white text-center p-4" :"top-[-220px]"} `}>
      <CustomLink className="text-lg font-semibold md:mx-4 " to="/">Home</CustomLink>
       <CustomLink className='text-lg font-semibold md:mx-4' to='review'> Reviews</CustomLink>
       <CustomLink className='text-lg font-semibold md:mx-4' to='/dashboard'> Dashboard</CustomLink>
       <CustomLink className='text-lg font-semibold md:mx-4' to='/blog'> Blog</CustomLink>
       <CustomLink className='text-lg font-semibold' to='/about'>About</CustomLink>
      </div>
    </div>
  );
};

export default Header;
