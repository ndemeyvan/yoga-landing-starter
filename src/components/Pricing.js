import React, { useState } from 'react';
// import pricing data
import { pricing } from '../data';


const Pricing = () => {
  const [initialIndex, setInitialIndex] = useState(0);
  const buttonIcon = '>'
  const handSelection = (index) => {
    setInitialIndex(index);
  }


  return <section className='section-sm lg:section-lg bg-section'>
    <div className="container mx-auto">
      {/* text */}
      <div className='text-center mb-16 lg:mb-32'>
        <h2 className='h2 mb-3 lg:mb-[18px] '>Pick a pricing plan</h2>
        <p className='max-w-[480px] mx-auto'>Pink a pricing plan and Get Started your journey with us for build your body and mind.</p>
      </div>
    </div>
    {/* Princing list */}
    <div className='flex flex-col lg:flex-row lg:gap-x-[33px] gap-y-7 justify-center items-center'>
      {pricing.map((item, currentIndex) => {
        const { title, price, list } = item;
        return <div data-aos='fade-up' data-aos-delay='300' onClick={() => handSelection(currentIndex)} className='relative cursor-pointer bg-white max-w-[360px] w-full min-h-[668px] h-full' key={currentIndex}>
          {/* Card top */}
          <div className={`${initialIndex === currentIndex ? 'bg-orange text-white' : 'bg-white text-heading'}  text-center pt-[70px]  pb-[34px] border border-b border-stroke-3 transition `}>
            <div className='text-[24px] font-medium mb-[10px]'>
              {title}
            </div>
            <div className='text-[34px] font-semibold'>
              {price}
            </div>
          </div>
          <div className='px-[30px] pt-[18px] pb-[30px] '>
            <p className='text-center mb-6 text-sm'>Discover your favorite class!</p>
            {/* Card checklist */}
            <ul>
              {list.map((subItem, subIndex) => {
                const { icon, name } = subItem;
                return <div key={subIndex} className='flex flex-col gap-3 mb-10'>
                  <li className='border border-stroke-3 p-2 rounded-md flex items-center gap-3'>
                    <div className='flex items-center rounded-full text-2xl text-green-300 justify-center bg-green-100 w-7 h-7 '>{icon}</div>
                    {name}
                  </li>
                </div>
              })}
            </ul>
            {/* Button */}
            <div
              className='absolute  bottom-[30px] w-full left-0 right-0 px-[30px]'
            >
              <button className={`${initialIndex === currentIndex ? 'bg-orange text-white' : 'border-orange'} w-full h-[50px] rounded border border-orange flex items-center justify-center text-orange font-medium transition relative`}>
                {/* Button Text */}
                Book now
                <div className={`${initialIndex === currentIndex ? 'bg-orange-200 text-white' : 'border-orange bg-orange'} w-[50px] h-[50px] flex justify-center items-center absolute right-0 rounded text-white`}>
                  {buttonIcon}
                </div>
              </button>
            </div>
          </div>
        </div>
      })}
    </div>

  </section>;
};

export default Pricing;
