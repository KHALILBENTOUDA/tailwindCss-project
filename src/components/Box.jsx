import React from 'react'

const Box = ({icon,title,desc}) => {
  return (
    <div className='text-white myFlex flex-col text-center '>
      <img src={icon} className='w-[70px] h-[70px]' alt="" />
      <h1 className=' text-xl font-semibold my-[15px]'>{title}</h1>
      <p className="text-sm opacity-50 font-mono text-[12px]">{desc}</p>
    </div>
  )
}

export default Box
