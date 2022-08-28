import React, { useState, useEffect } from 'react';
// import desktop nav
import Nav from './Nav';
// import mobile nav
import MobileNav from './NavMobile';

// import mobile image
import Logo from '../assets/img/logo.png';


const Header = () => {
  const [header, setHeader] = useState(false);
  return <div className={`${header ? 'top-0' : 'top-9'} flex justify-between  items-center px-4 lg:px-8 z-20 transition-all duration-200 fixed w-full bg-white max-w-[90vw] lg:max-w-[1170px] mx-auto rounded-md h-[90px] shadow-primary `}>

    <div className="flex items-center">
      {/* Logo */}
      <a href="#">
        <img src={Logo} srcset="" alt='logo' />
      </a>
      {/* Nav */}
      <div className='hidden lg:flex' >
        <Nav />
      </div>
    </div>
    <div className='flex items-center '>
      {/* Button */}
      <div className=' flex gap-x-4 lg:gap-x-9'>
        <button className='text-heading font-medium text-sm lg:text-base hover:text-orange transition '>Sign In</button>
        <button className='hover:bg-orange-100 transition btn btn-md lg:px-[30px] bg-orange-100 border border-orange text-orange font-medium text-sm lg:text-base hover:text-black '>Sign Up</button>
      </div>
      {/* Mobile Nav */}
      <MobileNav className='hidden' />
    </div>


  </div>;
};

export default Header;
