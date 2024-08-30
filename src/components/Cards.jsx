import React from 'react'
import Single from '../assets/singleuser.webp'
import double from '../assets/twousers.webp'
import triple from '../assets/multiuser.webp'

function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='bg-gray-200 w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 ease-in duration-300'>
                <img className='w-32 mx-auto mt-[-3rem] shadow-md' src={Single} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$148</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'> 500 GB Storage</p>
                    <p className='py-2 border-b mx-8'> 1 Granted User</p>
                    <p className='py-2 border-b mx-8'> Send up to 2 GB</p>
            </div>
            
            <button className='bg-[#00df9a] w-[120px] rounded-2xl mx-auto my-6 py-3 text-black  hover:scale-105 ease-in-out transition-all duration-300 hover:bg-gradient-to-l hover:from-[#00b4d8] hover:to-[#00df9a]' >Get Started</button>
        </div>
        <div className='bg-gray-200 w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 ease-in duration-300'>
                <img className='w-32 mx-auto mt-[-3rem] shadow-md' src={double} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$148</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'> 500 GB Storage</p>
                    <p className='py-2 border-b mx-8'> 1 Granted User</p>
                    <p className='py-2 border-b mx-8'> Send up to 2 GB</p>
            </div>
            
            <button className='text-[#00df9a] w-[120px] rounded-2xl mx-auto my-6 py-3 bg-black  hover:scale-105 ease-in transition-all duration-300 ' >Get Started</button>
        </div>
        <div className='bg-gray-200 w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 ease-in duration-300'>
                <img className='w-32 mx-auto mt-[-3rem] shadow-md' src={triple} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$148</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'> 500 GB Storage</p>
                    <p className='py-2 border-b mx-8'> 1 Granted User</p>
                    <p className='py-2 border-b mx-8'> Send up to 2 GB</p>
            </div>
            
            <button className='bg-[#00df9a] w-[120px] rounded-2xl mx-auto my-6 py-3 text-black hover:bg-gradient-to-l hover:scale-105 ease-in-out transition-all duration-300 ' >Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
