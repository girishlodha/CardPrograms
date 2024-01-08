import React from 'react';
import logo1 from ".//..//../assets/Icons.svg";
import logo2 from ".//..//../assets/Icons (2).jpg";

const Support = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-8 md:mb-16'>
      <div className='text-5xl font-semibold text-center'>Unlock Limitless Possibilities with </div>
      <div className='text-5xl font-semibold text-center'>Our New Card Solutions</div>
      <div className='flex flex-col md:flex-row justify-center items-center mt-6 gap-4'>
        <button className='xs: px-32 py-4  md:p-2  rounded-md bg-[#582066] flex justify-center items-center gap-2'>
          <div className='text-xl text-white'>Unlock your card</div>
          <img src={logo1} alt="img" />
        </button>

        <button className='flex xs: px-32 py-4 md:p-2 justify-center items-center gap-2 rounded-md bg-[#EEEFEF]  mt-4 md:mt-0'>
          <div className='text-xl text-[#5A6475]'>Customer support</div>
          <img src={logo2} alt="img" />
        </button>
      </div>
    </div>
  );
}

export default Support;
