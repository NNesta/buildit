import React from 'react';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-36 z-50'>
    <div className='h-full bg-transparent z-50 container mx-auto px-20'>
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
          <Button name="Need a project?" small={true}/>
        </div>
    </div>
    </div>
  )
}

export default Navbar;