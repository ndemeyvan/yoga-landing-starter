import React from 'react';
//import data
import { courses } from '../data';
//import all icons
import { BsFillStarFill, BsStarHalf } from 'react-icons/bs'


const Courses = () => {
  return <section className='section-sm lg:section-lg'>

    <div className="container mx-auto">
      {/* text */}
      <div className='text-center mb-16 lg:mb-32'>
        <h2 className='h2 mb-3 lg:mb-[18px] '>Popular courses</h2>
        <p className='max-w-[480px] mx-auto'>Practice any whre anytime. Explore a new way to exercise and learn more about yourself we are providing the best.</p>
      </div>
      {/* Courses list */}
      <div className='flex flex-col lg:flex-row lg:gap-x-[33px] gap-y-24 mb-7 lg:mb-14'>
        {courses.map((item, index) => {
          // destructuring
          const { image, title, desc, link, delay } = item;
          return <div className='w-full bg-white shadow-primary max-w-[360px] transition px-[18px] pb-[26px] lg:px-[28px] lg:pb-[38px] rounded-[14px] mx-auto hover:scale-100' key={index}>
            {/* Image */}
            <div className='-mt-[38px] lg:-mt-[12px] mb-4 lg:mb-6'>
              <img src={image} alt="" srcset="" />
            </div>
            {/* text */}
            <div>
              <h4 className='text-lg lg:text-xl fon-semibold mb-2 lg:mb-4'> {title} </h4>
              <p>{desc}</p>
            </div>
            {/* Stars and link */}
            <div className='flex items-center justify-between mt-8 mb-2 lg:mb-0'>
              {/* Stars */}
              <div className='flex items-center justify-between text-orange'>
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsStarHalf />
                <span className={`ml-2 text-stroke-2 font-bold`}>(18)</span>
              </div>
              {/* Link */}
              <div className={`font-bold ${index === 0 ? 'text-orange' : ''}`}>
                <a href={link}>Get Started</a>
              </div>
            </div>
          </div>
        })}
      </div>
      {/* Browse all button */}
      <div className='text-center'>
        <button className='btn btn-sm lg:btn-lg bg-orange text-white'>Browse All</button>
      </div>
    </div>
  </section>;
};

export default Courses;
