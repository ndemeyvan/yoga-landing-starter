import React from 'react';

//import icon
import { MdEmail } from 'react-icons/md'

const Newsletter = () => {
  return <section className='section-sm lg:section-lg bg-cardsBg min-h-[520px]'>

    <div className='container mx-auto ' data-aos='fade-up' data-aos-delay='300'>
      {/* Text subscribe */}
      <div className='border-[8px] border-green-300 rounded-lg text-center py-[70px]  p-4'>
        <h4 className='h4 text-white text-[24px] font-bold mb-[14px] '>
          Subscribe Our Newsletter
        </h4>
        <p className='text-green-200 mb-12'>Subscribe our newsletter for futher update about us.</p>
        {/* Form */}
        <form className='max-w-[752px] mx-auto relative flex flex-col lg:flex-row gap-y-6 lg:p-0 gap-x-4 lg:gap-x-0 p-4'>
          <div className='w-full relative flex '>
            {/* icon */}
            <div className='absolute left-2 h-full w-12 flex justify-center items-center text-green-300 text-2xl'>
              <MdEmail />
            </div>
            {/* Email input */}
            <input type="email" name="" id="" className='text-white pl-[60px] placeholder:text-green-100 form-control w-full border border-green-300 bg-transparent outline-none' placeholder='Enter your email' />

          </div>
          {/* Button */}
          <button className='btn btn-lg btn-orange text-white w-full lg:w-[180px] lg:border lg:border-orange lg:rounded-l-none'>
            Subscribe
          </button>

        </form>
      </div>
    </div>

  </section>;
};

export default Newsletter;
