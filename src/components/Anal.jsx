import React from 'react'
import Fairypic from '../assets/fairypic.png'


function anal() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='mx-auto w-[500px] my-4' src={Fairypic} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-orange-800 font-bold'>Interesting Beauty</p>
          <h1 className='md:text-4xl sm:text-3xl mx-auto text-xl py-2 '>From another world</h1>
          <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sint quis perspiciatis officiis magnam soluta incidunt minus, ab quaerat necessitatibus! Voluptatibus officiis cumque distinctio fuga, possimus odit a veniam dolor.</p>
          <button className='bg-black w-[120px] md:m-x-0 rounded-2xl mx-auto my-6 py-3 text-[#00df9a] hover:scale-105 ease-in-out transition-all duration-300 ' >Get Started</button>
      </div>  
      </div>
    </div>
  )
}

export default anal
