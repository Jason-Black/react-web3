import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
        <div className="w-full max-w-[800px] mt-[-96] h-screen mx-auto text-center flex flex-col justify-center">
            <p className='text-[#00df9a] font-bold p-2'>Growing with data analytics</p>
            <h1 className='md:text-7xl sm:text-6xl font-bold text-4xl md:py-6'>Grow With Data</h1>
            <div className='grid col-1'>
                <p className='md:text-5xl sm:text-4x text-xl font-light'>Fast, Flexible financing for</p>
                <div className='pt-1'>
                <ReactTyped className='pt-1 md:text-green-500 md:text-5xl sm:text-cyan-500 sm:text-4xl text-2xl font-bold '
      strings={[
        "products",
        "categories",
        "<spam style='color:red; '>brands</span>",
      ]}
      typeSpeed={40}
      backSpeed={60}
    
      loop />
            </div>
            </div>
        </div>
      Hero
    </div>
  )
}

export default Hero
