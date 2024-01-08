import React from 'react'

const Card = ({imageUrl,text,text2,text3}) => {
  return (
    <div className='flex flex-col items-center justify-start'>
      <img src={imageUrl} alt="img" />
      <div className='font-semibold py-1'>{text}</div>
      <div className='text-[#5A6475] py-1'>{text2}</div>
      <div className='text-[#5A6475] '>{text3}</div>
      
    </div>
  )
}

export default Card
