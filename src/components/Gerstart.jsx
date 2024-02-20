import React from 'react'

const Gerstart = () => {
  return (
    <section className=' bg-wive relative pt-[150px] max-w-full'>
        <div className='w-[70%] absolute top-[50px] left-[50%] translate-x-[-50%] bg-favo  shadow-black shadow-xl text-center text-white p-[20px] z-50 rounded-lg   '>
            <h1 className='text-[35px] font-sans font-bold pb-5 max-md:text-[17px] ' >Get early access today</h1>
            <p className='font-mono text-[11px] opacity-50 w-[70%] m-auto  max-md:text-[7px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nam, ad magni a id nihil iure eligendi placeat nesciunt corporis quaerat vero qui nostrum harum, quasi nulla voluptatem. Unde, eius?</p>
            <div className="pt-5 myFlex max-md:flex-col ">
                <input className='bg-withe w-[100%] py-2 px-5 rounded-[20px] text-black  max-md:text-[10px] md:w-[60%]' type="email" name="" id="" placeholder='Email@example.com'/>
                <button className=' bg-sky-500 px-5 py-2 rounded-[20px] max-md:mt-5 md:ml-5 max-md:text-[10px] flex-col'>Get Started For Free</button>
            </div>
        </div>
    </section>
  )
}

export default Gerstart
