import React from 'react';
import Image from 'next/image';

function SocialSection() {
  return (
    <div className='w-full min-h-screen h-fit bg-primarySkyDry'>
   <div className='w-full max-w-[80%] mx-auto flex flex-col gap-6 items-center pt-16 pb-8'>
        <h4 className='text-primaryGreenish font-medium'>Socials</h4>
        <h1 className='text-primaryGreenDarkish text-3xl font-bold'>On Instagram</h1>
        <div className="grid grid-cols-3 gap-4">
         <Image src='/assets/instagram-1.png' width={328*0.75} height={278*0.75}/>
         <Image src='/assets/instagram-2.png' width={328*0.75} height={278*0.75}/>
         <Image src='/assets/instagram-3.png' width={328*0.75} height={278*0.75}/>
         <Image src='/assets/instagram-4.png' width={328*0.75} height={278*0.75}/>
         <Image src='/assets/instagram-5.png' width={328*0.75} height={278*0.75}/>
         <Image src='/assets/instagram-6.png' width={328*0.75} height={278*0.75}/>
        </div>
   </div>
    </div>
  )
}

export default SocialSection