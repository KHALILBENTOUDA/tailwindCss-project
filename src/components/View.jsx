import React, { useState } from 'react'
import Card from './Card'
import use1 from '../assets/khalil.png'
import use2 from '../assets/ayoub.png'
import use3 from '../assets/mohammed.png'

import icon from '../images/bg-quotes.png'
const View = () => {
    const obj=[
        {img:use1,name:'Khalil', pr:'Ben Touda', state:"Web devolopper", dec:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus optio temporibus nisi quidem obcaecati! Quibusdam veritatis hic magnam,"},
        {img:use2,name:'Ayoub', pr:'Ben Touda', state:"ShopKeepr", dec:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus optio temporibus nisi quidem obcaecati! Quibusdam veritatis hic magnam,"},
        {img:use3,name:'Mohammed', pr:'Ben Touda', state:"Accountent", dec:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus optio temporibus nisi quidem obcaecati! Quibusdam veritatis hic magnam,"},
    ]
    const [view, setview] = useState(obj)
    console.log(view)
  return (
    <section className='bg-wive py-[170px] '>
        <div className='w-[90%] mx-auto grid gap-[30px]  grid-cols-1  lg:grid-cols-3 md:grid-cols-2 relative'>
        <div className='absolute left-[-9px] top-[-30px]'>
            <img src={icon} className='w-[50px] ' alt="" />
        </div>
            {
                view.map((ele)=>{
                    return (
                        <>
                        <Card name={ele.name} pr={ele.pr} state={ele.state} dec={ele.dec} img={ele.img}/>
                        </>
                    )
                })
            }
            
        </div>
    </section>
  )
}

export default View
