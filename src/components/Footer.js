import React, { useState } from 'react';
//Import image logo
import Logo from '../assets/img/logo.png'
// import all social network icon
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa'

const Footer = () => {
  const year = new Date().getFullYear();
  return <section className='section-sm lg:selection-lg pb-[70px]'>

    <div className="container mx-auto">
      <div className='flex flex-col justify-between items-center lg:flex-row' data-aos='fade-up' data-aos-delay='300'>
        {/* Logo */}
        <a href="#" className='mb-4 lg:mb-0'>
          <img src={Logo} alt="" />
        </a>
        {/* Copyright */}
        <div className='mb-4 lg:mb-0'>
          <p>&copy; {year} Made with <span className='text-orange text-3xl px-1'>&#10084;</span> by Ndeme Yvan </p>
        </div>
        {/* Social Media list */}
        <div className='flex gap-x-4 text-lg mb-4 lg:mb-0'>
          <div className='w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition'>
            <FaYoutube className='text-[40px] lg:text-[25px] hover:text-orange transition' />
          </div>
          <div className='w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition'>
            <FaGithub className='text-[40px] lg:text-[25px] hover:text-orange transition' />
          </div>
          <div className='w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition'>
            <FaInstagram className='text-[40px] lg:text-[25px] hover:text-orange transition' />
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Footer;
