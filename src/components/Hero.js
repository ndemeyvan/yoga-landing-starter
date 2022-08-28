import React from 'react';

// import react paralax
import { Parallax } from 'react-parallax';

// import hero Image
import Image from '../assets/img/hero/guy.png'

//Import Header component
import Hearder from './Header'

const Hero = () => {
  return <section className='min-h-[518px] lg:min-h-[815px] pt-9 lg:bg-circle lg:bg-no-repeat lg:bg-right-top '>
    <div className="container mx-auto   mt-[160px]">
      {/* Header */}
      <Hearder />
      <div className='flex flex-col items-center lg:flex-row lg:items-start pt-23'>
        <div className=''>
          <h1 className='h1 mb-3  lg:mb-[22px]'>Yoga to <br /> Release stress </h1>
          <p className='mb-6 lg:mb-12 max-w-[480px] lg:text-lg'>Yoga is way to life , rather than chore , counteract the stresses of modern life by becoming more mindful and compasionate.</p>
          {/* Btn group */}
          <div className='mb-12 space-x-4'>
            <button className='btn btn-sm lg:btn-lg btn-orange'>Get Started</button>
            <button className='btn btn-sm lg:btn-lg text-heading bg-transparent border hover:border-2 transition ease-in-out duration-900'>Learn more</button>
          </div>
        </div>

        {/* Image yoga Guy */}
        <div className='w-full bg-circle bg-cover lg:bg-none lg:w-auto'>
          <div className='flex-1 flex justify-center lg:justify-end'>
            <div className='w-[234px] h-[240px] lg:w-[504px] lg:h-[774px] mt-0'>
              <Parallax className='w-full h-full p-28 lg:p-16' bgImage={Image} bgImageAlt='Yoga guy' strength={200} />
            </div>
          </div>
        </div>
      </div>

    </div>

  </section>;
};

export default Hero;
