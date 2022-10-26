import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-36 z-50'>
    <div className='h-full bg-transparent z-50 w-[1240px] max-w-[80%] mx-auto'>
        <div className='flex justify-between  h-full items-center'>
          <div className='flex items-center gap-4'>
              <div className='w-8 h-8 bg-primaryGreen rounded-full'></div>
              <h1 className='text-xl font-bold text-primaryGreen'><Link href='/'>Buildit</Link></h1>
          </div>
          <ul className='flex gap-4 text-primaryGreenLight'>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/about">Services</Link></li>
            <li><Link href="/about">Projects</Link></li>
            <li><Link href="/about">Contacts</Link></li>
          </ul>
          <button className='bg-primaryGreen text-white py-2 px-4 rounded-md font-semibold'>Need a project?</button>
        </div>
    </div>
    </div>
  )
}

export default Navbar;