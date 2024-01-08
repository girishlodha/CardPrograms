import React from 'react';
import Card from '../Card/Card';
import logo1 from "./../../assets/Big Icons (1).png";
import logo2 from "./../../assets/Big Icons.jpg";
import logo3 from "./../../assets/Big Icons (1).jpg";

const Cardlist = () => {
  return (
    <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center gap-8 m-4 sm:m-16 mb-32'>
      <Card imageUrl={logo1} text={"Globally Accepted"} text2={"Lorem ipsum dolor sit amet, consectetur "} text3={"adipiscing elit, sed do eiusmod"} />
      <Card imageUrl={logo2} text={"Biometric Integrated"} text2={"Lorem ipsum dolor sit amet, consectetur "} text3={"adipiscing elit, sed do eiusmod"} />
      <Card imageUrl={logo3} text={"Fully Secured"} text2={"Lorem ipsum dolor sit amet, consectetur "} text3={"adipiscing elit, sed do eiusmod"} />
    </div>
  );
};

export default Cardlist;
