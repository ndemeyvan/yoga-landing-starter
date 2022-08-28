import React, { useState } from 'react';
// import package modal video
import ModalVideo from 'react-modal-video'
//import video scss
import '../video.scss';
// import icon video
import { BsPlayCircleFill } from 'react-icons/bs';



const Features = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClickYoutube = () => {
    setOpen(!isOpen);
  }

  return <section className='bg-section pt-8 min-h-[428px] pb-[38px] lg:pb-[150px] mt-[120px] lg:mt-[130px]'>
    <div className="container mx-auto">
      {/* Bg Video */}
      <div className='mt-10  lg:mt-[90px] rounded-md mb-[28px] w-full  bg-video h-[310px] bg-cover bg-center bg-no-repeat lg:h-[622px] flex flex-col items-center justify-center'>
        {/* Video Play btn*/}
        <div onClick={() => handleClickYoutube()} className='text-orange text-6xl lg:text-[110px] cursor-pointer hover:scale-110 transition'>
          <BsPlayCircleFill />
        </div>
      </div>
      {/* Text */}
      <div className='lg:mt-[90px] flex flex-col lg:flex-row justify-between'>
        <div className=''>
          {/* Line orange */}
          <div className='w-9 h-[2px] bg-orange mb-2 lg:w-[70px] rounded-full'></div>
          <h2 className='h2 mb-3 lg:mb-0'>The Better Way to <br /> Start Yoga</h2>

        </div>
        <div>
          <div>
            <p className='max-w-[360px] mb-[18px] lg:mb-[38px]'>Practice any whre anytime. Explore a new way to exercise and learn more about yourself we are providing the best.</p>
          </div>
          {/* Button */}
          <button className='btn btn-sm lg:btn-lg btn-orange'>Get started</button>
        </div>
      </div>
    </div>
    {/* Modal Video */}
    <ModalVideo isOpen={isOpen} autoplay channel='youtube' videoId='tYySxPtGsIg' onClose={() => handleClickYoutube()} />
  </section>;
};

export default Features;
