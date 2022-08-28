import React from 'react';
// import all card image
import CardImage1 from '../assets/img/cards/card-1.png'
import CardImage2 from '../assets/img/cards/card-2.png'
import CardImage3 from '../assets/img/cards/card-3.png'


const Cards = () => {
  return <section className='w-full bg-cardsBg min-h-[260px] pb-[55px] lg:-mt-24' data-aos='fade-up' data-aos-delay='500' data-aos-duration='1200'
  >

    <div className="container mx-auto flex flex-col lg:flex-row gap-x-[32px]">
      {/* card-group */}
      <div className='flex flex-1 gap-x-[15px] lg:gap-x-[32px] -mt-[38px] z-10 lg:-mt-[77px] mx-auto'>
        {/* Card One */}
        <div className='bg-white w-full max-w-[282px] max-h-[282px] rounded-md p-[14px] lg:p-[26px] shadow-2xl' data-aos='fade-up' data-aos-delay='500'>
          {/* Card text */}
          <div className='flex items-center mb-[18px] lg:mb-[28px]'>
            <h4 className='text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8'>Make your Own Plan For Yoga</h4>
            <h2 className='h2 text-stroke-2'>1</h2>
          </div>
          {/* Card image */}
          <div><img src={CardImage1} alt="" srcset="yoga image 1" /></div>
        </div>
        {/* Card Two */}
        <div className='bg-white w-full max-w-[282px] max-h-[282px] rounded-md p-[14px] lg:p-[26px] shadow-2xl' data-aos='fade-up' data-aos-delay='500'>
          {/* Card text */}
          <div className='flex items-center mb-[18px] lg:mb-[28px]'>
            <h4 className='text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8'>Make your Own Plan For Yoga</h4>
            <h2 className='h2 text-stroke-2'>2</h2>
          </div>
          {/* Card image */}
          <div><img src={CardImage2} alt="" srcset="yoga image 2" /></div>
        </div>
      </div>
      {/* Card 3*/}
      <div className='items-start shadow-2xl w-full rounded-md flex justify-between max-w-[542px] mx-auto p-[26px] lg:-mt-[77px] bg-pink-200 z-10 mt-4' data-aos='fade-up' data-aos-delay='500'>
        <div className='max-w-[240px] '>
          <div className='flex items-center mb-4 lg:mb-8'>
            <h4 className='text-lg lg:text-2xl lg:leading-7 font-bold text-heading mr-8'>Every-Day Open Master Classes</h4>
            <h2 className='h2 text-stroke-4'>3</h2>
          </div>
          <p className='mb-4 lg:mb-3'>We're boosting online yoga by enabling anyone in the world to learn from the best </p>
          <a href="#" className='text-xs lg:text-sm font-bold uppercase text-heading border-b'>Read more</a>
        </div>
        <div><img src={CardImage3} alt="" srcset="yoga image 3" /></div>

      </div>



    </div>
  </section>;
};

export default Cards;
