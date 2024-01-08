import React from 'react'
import logo1 from "./../../assets/Company logo (3).jpg"
import logo2 from "./../../assets/Avatar.jpg"
const Wise = () => {
  return (
    <div className='flex flex-wrap flex-col items-center justify-center mt-48'>
      <img className='mb-8' src={logo1} alt="img" />
      <div className="max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
        <p className=" text-[#24282F] text-center text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl leading-6 md:leading-7 lg:leading-8 xl:leading-9">
          I had the pleasure of experiencing the next generation of card solutions with this incredible product. It'srefreshing to see such innovation in the financial industry.
        </p>
      </div>
      <img className='mb-16' src={logo2} alt="img" />



    </div>
  )
}

export default Wise
