
import React from 'react'
import { useEffect, useRef,useState } from "react"
import logo from '../images/logo.svg'
const Tailwind = () => {
  const [scroller, setscroller] = useState("scrolle")
  const nav=["Home","Works","Serves","Contact"]

  const navscrolle=useRef()
  useEffect(() => {
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 100){
        setscroller('scrolle')
        navscrolle.current.style.height ='70px'
        

      }else{
        navscrolle.current.style.height ='80px'
        navscrolle.current.style.background ='transparent'
        navscrolle.current.style.border ='none '
      }
    })
  }, [])
  
  return (
    <div ref={navscrolle}  className=' w-full backdrop-blur-3xl  text-white h-20  flex items-center fixed z-50 transition-all duration-50 '>
      <nav ref={navscrolle}  className=' backdrop:blur  w-[90%] m-auto flex justify-between items-center max-sm:block'>
      <div className=" w-1/4">
        <img src={logo} className='w-[90px] max-sm:text-[18px]'/>
      </div>
      <ul className='myFlex gap-[50px] font-mono text-md font-bold  max-sm:gap-[0px] max-sm:text-[10px] pb-[10px]'>
          {
            nav.map(items=>{
              return(
                <>
                <li className=' hover:text-sky-500 p-2 cursor-pointer  '>{items}</li>
                </>
              )
            })
          }
        
      </ul>
    </nav>

    </div>
    

  )
}

export default Tailwind
