import React from 'react';

const Threekeys = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <div className='text-5xl text-center font-semibold p sm:break-words'>
        Elevating Card Programs with
      </div>
      <div className='text-5xl  text-center font-semibold p-1 sm:break-words'>
        Cutting-Edge Technology
      </div>
      <div className='text-[#5A6475] text-xl text-center sm:break-words mt-4'>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      </div>
      <div className='text-[#5A6475] text-xl text-center sm:break-words'>
        labore et dolore magna aliqua.
      </div>
      <div className='m-6 flex justify-center items-center gap-2'>
        <div className='text-[#582066] text-xl font-semibold'>
          Compare all Pro features
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-4 h-4 text-[#582066] font-semibold'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
          />
        </svg>
      </div>
    </div>
  );
};

export default Threekeys;
