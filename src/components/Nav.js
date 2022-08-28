import React from 'react';
// import navigation data
import { navigation } from '../data';

const Nav = () => {
  return <div className='ml-[70px]'>
    {/* Menu items */}
    <ul className=' flex gap-x-[42px] items-center justify-center w-full'>
      {navigation.map((item, index) => {
        return (<li key={index}><a href={item.href}>{item.name}</a></li>)
      })}
    </ul></div>;
};

export default Nav;
