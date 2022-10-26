import React from 'react';
import Image from 'next/image';

function PartnersLogos() {
  const images = [
    '/assets/vector-1.svg',
    '/assets/vector-2.svg',
    '/assets/vector-3.svg',
    '/assets/vector-4.svg',
    '/assets/vector-5.svg',

  ]
  return (
    <div className="flex items-center bg-transparent border-y-[1px] border-primaryGreenAccent justify-center py-4 gap-16 w-full max-w-[80%] mx-auto">
         {images.map(image=><Image key={Math.random()} alt='' src={image} height={75*0.5} width={140*0.5}/>)}
        </div>
  )
}

export default PartnersLogos