import React from 'react';
import Image from 'next/image';

function HomeSocialSection() {
  const images = [
    '/assets/instagram-1.png',
    '/assets/instagram-2.png',
    '/assets/instagram-3.png',
    '/assets/instagram-4.png',
    '/assets/instagram-5.png',
    '/assets/instagram-6.png',
  ]
  return (
    <div className='w-full h-fit bg-primarySkyDry'>
   <div className='w-full max-w-[80%] mx-auto flex flex-col gap-6 items-center pt-16 pb-8'>
        <h4 className='text-primaryGreenish font-medium'>Socials</h4>
        <h1 className='text-primaryGreenDarkish text-3xl font-bold'>On Instagram</h1>
        <div className="grid grid-cols-3 gap-4">
         {images.map(image=><Image src={image} width={328} height={278}/>)}
        </div>
   </div>
    </div>
  )
}

export default HomeSocialSection