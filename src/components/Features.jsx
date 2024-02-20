import React from 'react'
import Box from './Box'
import icon1 from '../images/icon-access-anywhere.svg'
import icon2 from '../images/icon-any-file.svg'
import icon3 from '../images/icon-collaboration.svg'
import icon4 from '../images/icon-security.svg'
import Section from './Section'
const Features = () => {
    const info=[{icon:icon1 ,tite:"Acces your files,anywhere",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum molestiae autem animi, "},
                {icon:icon4 ,tite:"Acces your files,anywhere",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum molestiae autem animi, "},
                {icon:icon3 ,tite:"Acces your files,anywhere",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum molestiae autem animi, "},
                {icon:icon2 ,tite:"Acces your files,anywhere",desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum molestiae autem animi, "},
                ]
  return (
    <section className=' bg-wive'>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-[80px] w-[800px] mx-auto max-w-full'>
            
            {
                info.map((ele)=>{
                    return (
                        <>
                        <Box icon={ele.icon} title={ele.tite} desc={ele.desc}/>
                        </>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Features
