import React from 'react'
import Card from '../Card/Card'
import logo1 from '../../assets/Number (3).jpg'
import logo4 from '../../assets/Number (2).jpg'
import logo3 from '../../assets/Number (1).jpg'
import logo2 from '../../assets/Number.jpg'
const UserData = () => {
  return (
    <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center gap-20 mb-16 mt-64'>
      <Card imageUrl={logo1} text = {"Customers"} text2={"consectetur adipiscing elit, sed do"} text3 ={"eiusmod tempor incididunt ut"}/>
      <Card imageUrl={logo2} text = {"Downloads"} text2={"consectetur adipiscing elit, sed do"} text3 ={"eiusmod tempor incididunt ut"}/>
      <Card imageUrl={logo3} text = {"Transaction"} text2={"consectetur adipiscing elit, sed do"} text3 ={"eiusmod tempor incididunt ut"}/>
      <Card imageUrl={logo4} text = {"Latest Version"} text2={"consectetur adipiscing elit, sed do"} text3 ={"eiusmod tempor incididunt ut"}/>
      
    </div>
  )
}

export default UserData
