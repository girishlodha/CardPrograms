import React from 'react';
import logo1 from "./../../assets/Image ( 592_490 ).jpg";
import logo2 from "./../../assets/Image ( 592_490 ).png";

const Photos = () => {
  return (
    <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center gap-4 m-4 sm:m-16'>
      <img src={logo1} alt="img" className='mb-4 sm:mb-0' />
      <img src={logo2} alt="img" className='mb-4 sm:mb-0' />
    </div>
  );
}

export default Photos;
