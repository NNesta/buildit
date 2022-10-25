import React from 'react';
import Image from 'next/image';

function InnovativeSection() {
  return (
    <div className='w-full h-screen max-w-[70%] mx-auto flex flex-col gap-16 py-32'>
       <h1 className='text-6xl text-primaryGreenDarkish font-bold mx-auto'>Innovative Execution</h1>
        <div className="grid grid-cols-3 gap-8 max-w-[95%] mx-auto">
            <div className='flex flex-col gap-4'>
                <div className='bg-primaryGreenAccent py-2 px-3 self-start rounded-md' >
            <Image src='/assets/listing.svg' width={25} height={25}/>
</div>
            <h1 className='text-primaryGreenDarkish text-2xl font-bold' >Featured Listing</h1>  
            <p className='max-w-[80%]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>  
            </div>
            <div className='flex flex-col gap-4'>
                <div className='bg-primaryGreenAccent py-2 px-3 self-start rounded-md' >
            <Image src='/assets/chevrons.svg' width={25} height={25}/>
</div>
            <h1 className='text-primaryGreenDarkish text-2xl font-bold' >Available Properties</h1>  
            <p className='max-w-[80%]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>  
            </div>
            <div className='flex flex-col gap-4'>
                <div className='bg-primaryGreenAccent py-2 px-3 self-start rounded-md' >
            <Image src='/assets/news-icon.svg' width={25} height={25}/>
</div>
            <h1 className='text-primaryGreenDarkish text-2xl font-bold' >In the News</h1>  
            <p className='max-w-[80%]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>  
            </div>
        </div>
    </div>
  )
}

export default InnovativeSection