import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
}
  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
      <ul className='md:flex hidden'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
   
        <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25} />}
     
      </div>
      <div className={!nav ? 'bg-[#000300] fixed left-0 top-0 w-[60%] h-full border-r border-r-sky-900 ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <h1 className='w-full text-3xl font-bold m-4 text-[#00df9a]'>React.</h1>
        <ul className='p-4 uppercase'>
        <li className='p-4  border-b border-b-sky-200'>Home</li>
        <li className='p-4 border-b border-b-sky-800'>Company</li>
        <li className='p-4 border-b border-b-sky-800'>Resources</li>
        <li className='p-4 border-b border-b-sky-800'>About</li>
        <li className='p-4'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
