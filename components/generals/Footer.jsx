import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <div className='h-fit footerGradient py-16'>
        <div className='grid grid-cols-4 gap-8 text-primaryWhiteAccent container mx-auto px-20'>
         <div className='flex flex-col gap-8 h-48'>
            <h1 className='text-2xl font-bold'>Buildit</h1>
             <p className='text-lg flex-1'>Development company, 2022</p>
             <p>Site design – ⏰ Alarm</p>
         </div>
         <div className='flex flex-col justify-between'>
         <ul className='flex flex-col gap-2'>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
         </ul>
         <div className='flex gap-4'>
         <div className='bg-primaryWhiteAccent bg-opacity-10 py-2 px-3 self-start rounded-md' >
            <Image alt='' src='/assets/insta.svg' width={15} height={15}/>
</div> 
         <div className='bg-primaryWhiteAccent bg-opacity-10 py-2 px-3 self-start rounded-md' >
            <Image alt='' src='/assets/face.svg' width={15} height={15}/>
</div> 
         </div>
         </div>
         <ul className='flex flex-col gap-2'>
            <li>About us</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
         </ul>
         <div className='flex flex-col justify-between'>
         <ul className='flex flex-col gap-2'>
            <li>Get in touch</li>
            <li>60 Manor Station St. Fairport, </li>
            <li>NY 14450</li>
         </ul>
         <ul className='flex flex-col gap-2'>
            <li>708-790-0000</li>
            <li>sales@buildit.site</li>
         </ul>
         
         </div>
         
        </div>
    </div>
  )
}

export default Footer;