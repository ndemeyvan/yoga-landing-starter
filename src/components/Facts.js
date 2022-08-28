import React from 'react';
import CountUp from 'react-countup';
// Import image signature
import ImageSignature from '../assets/img/john-cena.png'
//Import fact data
import { facts } from '../data'


const Facts = () => {
  return <div className='mt-[90px]'>
    {/* Left side : counter ect ...*/}
    <div className='container mx-auto  flex flex-col lg:flex-row flex-wrap lg:gap-x-[30px]'>
      <div className='flex-1 flex flex-wrap gap-x-[5%] gap-y-[35px]'>
        {facts.map((item, index) => {
          // item destructuration 
          const { startNumber, endNumber, unit, title, desc } = item;
          return (
            <div key={index} className='w-[35%]'>
              <h2 className='h2 mb-2 lg:mb-4'> <CountUp start={startNumber} end={endNumber} duration={2} enableScrollSpy />
                {unit}+
              </h2>
              <div className='text-xl font-bold text-heading mb-3'>
                {title}
              </div>
              <p className='max-w-[240px]'>{desc}</p>
            </div>
          )
        })}
      </div>
      {/* Rigth side : signature ect ...*/}
      <div className='-order-1  lg:order-none'>
        <div className='flex flex-col justify-center lg:pl-[20px] h-full'>
          <h2 className='h2 mb-12 max-w-[295px] md:max-w-[450px]'>Relax And Enjoy Personalized Day Yoga with us.</h2>
          {/* Image */}
          <div className='mb-2'>
            <img src={ImageSignature} alt="signature" srcset="" />
          </div>
          <div className='text-lg mb-6 font-bold text-heading '>
            Ndeme Yvan/<span className='text-paragraph font-normal'>Founder</span>
          </div>
        </div>
      </div>

    </div>



  </div>;
};

export default Facts;
