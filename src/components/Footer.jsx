import React from 'react'
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem reprehenderit beatae sint perspiciatis aperiam possimus consequatur quidem maxime, aspernatur deserunt. Dolorum laudantium velit modi doloribus dignissimos accusantium minima est cum.</p>
     <div className='flex justify-between my-6 md:w-[75%] my-6'>
    
        <FaFacebookSquare size={30} />
        <FaInstagram size={30} />
        <FaGithubSquare size={30} />
        <FaTwitterSquare size={30} />
     </div>
     
      </div>
    </div>
  )
}

export default Footer
