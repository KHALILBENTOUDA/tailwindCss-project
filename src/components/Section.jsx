import React from 'react'
import secImage from '../images/illustration-stay-productive.png'
import arr from '../images/icon-arrow.svg'
const Section = () => {
  return (
   <section className=' bg-wive pt-[130px] max-w-full'>
     <div className='w-[90%] mx-auto grid  grid-cols-1 md:grid-cols-2 gap-[20px] place-items-center'>
        <div className="w-[100%] ">
            <img src={secImage} className='w-[75%] mx-auto  max-sm:w-[100%]' alt="" />
        </div>
        <div className="w-[100%] text-slate-50">
            <h1 className=' font-sans font-semibold text-[30px] py-5'>Stay productive , <br /> whrever you are </h1>
            <p className='mb-[20px] text-[12px] font-mono font-semibold opacity-50'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus exercitationem voluptatibus mollitia veniam deserunt! Exercitationem reprehenderit optio architecto. Quisquam incidunt laudantium tempore quos laboriosam, deserunt blanditiis voluptas reiciendis in vel!</p>
            <p className='mb-[20px] text-[12px] font-mono font-semibold opacity-50 pb-[20px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus exercitationem voluptatibus mollitia veniam deserunt! Exercitationem reprehenderit optio architecto. Quisquam incidunt laudantium tempore quos laboriosam, deserunt blanditiis voluptas reiciendis in vel!</p>
            <a href="#" className='btn-2 flex items-center gap-6 w-fit '>Showe More <img src={arr} className='w-[20px] h-[20px] animate-maveRight ' alt="" srcset="" /></a>
        </div>  
    </div>
   </section>
  )
}

export default Section
