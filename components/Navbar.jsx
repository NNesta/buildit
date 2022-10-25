import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='absolute top-0  w-full h-40 bg-transparent z-50'>
        <div className='flex justify-between max-w-[80%] h-full mx-auto items-center'>
          <div className='flex items-center gap-4'>
              <div className='w-8 h-8 bg-primaryGreen rounded-full'></div>
              <h1 className='text-xl font-bold text-primaryGreen'>Buildit</h1>
          </div>
          <ul className='flex gap-4 text-primaryGreenLight'>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/about">Services</Link></li>
            <li><Link href="/about">Projects</Link></li>
            <li><Link href="/about">Contacts</Link></li>
          </ul>
          <button className='bg-primaryGreen text-white py-2 px-4 rounded-md'>Need a project?</button>
        </div>
    </div>
  )
}

export default Navbar