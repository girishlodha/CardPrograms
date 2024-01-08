import React from 'react';
import logo1 from '../../assets/Company logo.jpg';
import logo2 from '../../assets/Company logo (1).jpg';
import logo3 from '../../assets/Company logo (2).jpg';
import logo4 from '../../assets/Company logo (3).jpg';
import logo5 from '../../assets/Company logo (4).jpg';
import logo6 from '../../assets/Company logo (5).jpg';
import logo7 from '../../assets/Company logo (6).jpg';
import logo8 from '../../assets/Company logo (7).jpg';

const CompanyLogo = () => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-16 py-8 md:py-16 lg:py-32'>
      <img src={logo1} alt="imag" className='mb-4' />
      <img src={logo2} alt="ima" className='mb-4' />
      <img src={logo3} alt="ima" className='mb-4' />
      <img src={logo4} alt="ima" className='mb-4' />
      <img src={logo5} alt="ima" className='mb-4' />
      <img src={logo6} alt="ima" className='mb-4' />
      <img src={logo7} alt="ima" className='mb-4' />
      <img src={logo8} alt="ima" className='mb-4' />
    </div>
  );
};

export default CompanyLogo;
