import React from 'react';


const Contact = () => {
  return <section className='section-sm lg:section-lg'>

    <div className="container mx-auto ">
      <div className='flex flex-col lg:flex-row lg:gap-x-[74px] bg-contact bg-no-repeat bg-cover min-h-[600px]'>
        {/* Text */}
        <div className='flex-1 flex flex-col justify-center pl-8' data-aos='fade-right' data-aos-delay='300'>
          <h2 className='h2  mb-3 lg:mb-7'>Get in Touch with Us For Yoga Courses</h2>
          <p className=' mb-7 lg:mb-0'>Get in touch with us for any kind of help. We are here to give your the best and also here to help you to find your yoga course</p>
        </div>
        {/* Form */}
        <form className='max-h-[600px] lg:-mt-20 flex-1 bg-white shadow-primary rounded-[20px] p-5 lg:p-10 flex flex-col gap-y-5'data-aos='fade-left' data-aos-delay='300' >
          <input className='form-control ' placeholder='First name' required  type="text" name="" id="" />
          <input className='form-control ' placeholder='Last name' required  type="text" name="" id="" />
          <input className='form-control ' placeholder='Email' required  type="text" name="" id="" />
          <textarea  className='form-control py-5 h-[165px] resize-none' placeholder='message'></textarea>
          <button className='btn btn-lg btn-orange'>Send message</button>
        </form>
      </div>
    </div>

  </section>;
};

export default Contact;
