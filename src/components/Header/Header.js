import React from "react";
import CustomLink from "../Customlink/CustomLink";

const Header = () => {
  return (
    <div className="">
       <CustomLink className="text-lg font-semibold " to="/">Home</CustomLink>
       <CustomLink className='text-lg font-semibold' to='reviews'> Reviews</CustomLink>
    </div>
  );
};

export default Header;
