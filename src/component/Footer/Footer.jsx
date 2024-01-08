import React from 'react';
import logo1 from "./../../assets/Mode UI Logo.svg";
import logo2 from "./../../assets/Social Group.jpg";

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <img src={logo1} alt="img" />
      <div className='text-xs text-[#5A6475] mt-4'>Mode UI is a comprehensive design system that empowers</div>
      <div className='text-xs text-[#5A6475]'>designers and developers to create cohesive and visually stunning </div>
      <div className='text-xs text-[#5A6475] mb-16'>user interfaces across various platforms and devices</div>

      <div className='flex flex-row items-center justify-center gap-32 flex-wrap'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='text-[#24282F] text-xs font-bold text-opacity-80'>Company</div>
          <div className='text-[#363C46] text-xs'>About us</div>
          <div className='text-[#363C46] text-xs'>Pricing</div>
          <div className='text-[#363C46] text-xs'>Contact us</div>
          <div className='text-[#363C46] text-xs'>Features</div>
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='text-[#24282F] text-xs font-bold text-opacity-80'>Product</div>
          <div className='text-[#363C46] text-xs'>Figma design system</div>
          <div className='text-[#363C46] text-xs'>Ios kit</div>
          <div className='text-[#363C46] text-xs'>Android kit</div>
          <div className='text-[#363C46] text-xs'>Wireframe</div>
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='text-[#24282F] text-xs font-bold text-opacity-80'>Resources</div>
          <div className='text-[#363C46] text-xs'>Templates</div>
          <div className='text-[#363C46] text-xs'>Landing pages</div>
          <div className='text-[#363C46] text-xs'>Documentation</div>
          <div className='text-[#363C46] text-xs'>Comp library</div>
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='text-[#24282F] text-xs font-bold text-opacity-80'>Legal</div>
          <div className='text-[#363C46] text-xs'>Privacy policy</div>
          <div className='text-[#363C46] text-xs'>Terms & Conditions</div>
          <div className='text-[#363C46] text-xs'>Disclaimer</div>
          <div className='text-[#363C46] text-xs'>Affiliate programme</div>
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='text-[#24282F] text-xs font-bold text-opacity-80'>Support</div>
          <div className='text-[#363C46] text-xs'>Help centre</div>
          <div className='text-[#363C46] text-xs'>Raise ticket</div>
          <div className='text-[#363C46] text-xs'>Report</div>
          <div className='text-[#363C46] text-xs'>Refund</div>
        </div>
      </div>
      <img src={logo2} alt="img" className='mt-16 w-20 h-4' />
      <div className='text-xs font-semibold text-[#5A6475] mt-4 mb-8 text-opacity-50'>© 2023 Mode UI  Inc. All Rights Reserved.</div>
    </div>
  );
}

export default Footer;
