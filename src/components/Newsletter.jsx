import React from 'react';

function Newsletter() {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4'>
        <div className='lg:col-span-2'>
          <h1 className='font-bold md:text-5xl sm:text-4xl text-3xl py-2'>A Heading YEA!</h1>
          <p>Sign up for our Newsletter and we totally won't sign you up for furry fan clubs...</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Fake Email' />
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[150px] py-3 px-6 ml-4 my-6 sm:my-0'> Notify Me</button>
          </div>
          <p className='mt-4'>
            We care about the protection of your data. Read our 
            <span className='text-[#00df9a] cursor-pointer'> Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
