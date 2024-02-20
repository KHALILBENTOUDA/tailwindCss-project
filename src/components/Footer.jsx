import React from 'react'
import logo from '../images/logo.svg'
import phone from '../images/icon-phone.svg'
import email from '../images/icon-email.svg'
import location from '../images/icon-location.svg'
const Footer = () => {
  return (
    <footer className='bg-foot pt-[200px]'>
     <div className=" w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-white  opacity-70 text-[12px] text-center">
      <div className=" text-start">
          <img className='w-[80px] pb-[20px]' src={logo} alt=""/>
          <p className='text-[9px] flex items-start font-mono'> <img className='mr-[10px] mt-[5px]' src={location} alt="" srcset="" /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, optio rerum saepe mollitia animi rem ut iusto voluptas deleniti harum ducimus obcaecati amet dignissimos labore explicabo quod maxime porro similique.</p>
        </div>
        <div className="pl-[15px] pt-[43px]  ">
          <span className='flex pb-[15px]'> <img className='w-[15px] mx-[15px] max-md:ml-[0px]' src={phone} alt="" /> +212 607760484</span>
          <span className='flex pb-[15px]'><img className='w-[15px] mx-[15px]  max-md:ml-[0px]' src={email} alt="" /> benkhaliltouda3201@gmail.com</span>
        </div>
        <div className="flex flex-col text-center pt-[30px] ">
          <h3 className='text-[15px] font-semibold pb-[15px]'>About Us</h3>
          <a className='pb-[5px] hover:text-sky-500' href="">Jobs</a>
          <a className='pb-[5px] hover:text-sky-500' href="">Press</a>
          <a className='pb-[5px] hover:text-sky-500' href="">Blog</a>
        </div>
        <div className="flex flex-col pt-[30px] ">
        <h3 className='text-[15px] font-semibold pb-[15px]'>Contact Us</h3>
          <a className='pb-[5px] hover:text-sky-500' href="">Terms</a>
          <a className='pb-[5px] hover:text-sky-500' href="">Privacy</a>
        </div>
        
     </div>
     <div className="pt-[10px] pb-[20px] bg-slate-100 text-center">
          <p>Copyrite © 2024</p>
        </div>
    </footer>
  )
}
//grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4

export default Footer
