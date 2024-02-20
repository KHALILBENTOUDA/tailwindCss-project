import React from 'react'
import homeEmage from '../images/illustration-intro.png'
import desktop from '../images/bg-curvy-desktop.svg'

const Landing = () => {
  return (
      
    <section>
        <div className=' w-[90%] text-center mx-auto '>
            <div className="myFlex flex-col pt-[100px] ">
            <div className=" w-[600px] h-full max-w-full">
                    <img  className='w-full' src={homeEmage} alt="" />
                </div>
                <div className='w-[700px] max-sm:w-full m-auto'>
                    <h1 className=' text-center text-[40px] text-white  max-sm:text-[23px] my-[30px] fo font-mono'>
                        <span className='text-bls font-bold max-sm:text-[25px] shadow-sky-500'>All your files </span> in one secure location accessible <br /> anywhere.
                    </h1>
                    <p className='font-mono text-[11px] w-[50%] mx-auto text-white opacity-40 '>
                        Fylo stores all your most important files in one secure location .Acess them anywhere you need ,share and collaborate with frineds family, and co-workers.
                    </p>
                    <button className='btn bg-bls  '>Get Started</button>
                </div>
            </div>
        </div>
        <div className='w-full  mx-auto myFlex'>
            <img src={desktop} alt="" className='w-full '/>
        </div>
    </section>

  )
}

export default Landing
