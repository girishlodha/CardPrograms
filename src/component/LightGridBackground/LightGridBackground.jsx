import React from 'react';

const GridBackground = () => {


  return (
    <div className="flex flex-col  items-center justify-center">
      <div className="flex flex-col items-center justify-start  h-auto w-auto bg-[url('/src//assets//Mesh.svg')]" >
        <div className=' py-6 font-semibold text-[#582066]'><span>Seamless experience</span></div>
        <div className="max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
        <p className=" py-1 text-center text-[#121417] text-6xl font-semibold sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl leading-tight md:leading-tight lg:leading-tight xl:leading-tight">
        Unleashing the Next Generation of Card Solutions 
        </p>
      </div>
        
        <div className=' text-[#5A6475] text-center'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</div>
        <div className='text-[#5A6475] text-center'>dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</div>
        <button className='xs: px-32 py-4 mt-8  md:p-2  rounded-md bg-[#582066] flex justify-center items-center gap-2'>
        
          <div className='text-white'>Unlock your Card</div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>


        </button>

      </div>
      <div className='text-[#5A6475] text-sm'>*No credit card required</div>
    </div>
  );
};

export default GridBackground;
