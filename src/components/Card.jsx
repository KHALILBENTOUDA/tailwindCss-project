import React from 'react'

const Card = ({name,pr,state,dec,img}) => {
  return (
    <div className='text-white bg-favo  rounded-lg object-contain p-[20px] shadow-black shadow-2xl z-10'>
        <div>
            <p className=' font-mono text-[13px] opacity-50 '>
                {
                    dec
                }
            </p> 
        </div>
        <div className='flex items-center pt-[20px]'>
            <img className='w-[30px] h-[30px] rounded-full ' src={img} alt="" />
            <div className='pl-[15px]'>
                <strong className='text-[14px] pb-[17px]'>{`${name} ${pr}`}</strong>
                <p className='text-[11px] opacity-50 '>{state}</p>
            </div>
        </div>
    </div>
  )
}

export default Card
