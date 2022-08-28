import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
// import navigation data
import { navigation } from '../data';

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpenMenu = () => {
    setIsOpen(!isOpen);
  }
  return <div>
    {/* Menu icon */}
    <div className='cursor-pointer text-heading ml-[10px] lg:hidden' onClick={() => handleIsOpenMenu()}>
      <BiMenu size={40} />
    </div>
    {/* Menu items */}
    <ul className={`${isOpen ? 'max-h-70 p-8' : 'max-h-0 p-0'} flex flex-col w-full absolute bg-white top-24 left-0 shadow-primary space-y-5 overflow-hidden transition-all `}>
      {navigation.map((item, index) => {
        return (<li key={index}><a href={item.href}>{item.name}</a></li>)
      })}
    </ul>
  </div>;
};

export default NavMobile;
