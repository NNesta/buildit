import React from 'react';
import Image from 'next/image';

function HomeInnovativeSection() {
  return (
    <div className='container h-fit mx-auto flex flex-col gap-16 py-32 z-30 relative'>
       <h1 className='text-6xl text-primaryGreenDarkish font-bold mx-auto text-center'>Innovative Execution</h1>
        <div className="grid grid-cols-3 max-w-[90%] mx-36 gap-8 ">
            <div className='flex flex-col gap-4 max-w-[90%]'>
                <div className='bg-primaryGreenAccent py-2 px-3 self-start rounded-md shadow-md' >
            <Image src='/assets/listing.svg' width={25} height={25}/>
</div>
            <h1 className='text-primaryGreenDarkish text-2xl font-bold' >Featured Listing</h1>  
            <p className='max-w-[80%]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>  
            </div>
            <div className='flex flex-col gap-4  max-w-[90%]'>
                <div className='bg-primaryGreenAccent py-2 px-3 self-start rounded-md shadow-md' >
            <Image src='/assets/chevrons.svg' width={25} height={25}/>
</div>
            <h1 className='text-primaryGreenDarkish text-2xl font-bold' >Available Properties</h1>  
            <p className='max-w-[80%]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>  
            </div>
            <div className='flex flex-col gap-4 max-w-[90%]'>
                <div className='bg-primaryGreenAccent py-2 px-3 self-start rounded-md shadow-md' >
            <Image src='/assets/news-icon.svg' width={25} height={25}/>
</div>
            <h1 className='text-primaryGreenDarkish text-2xl font-bold ' >In the News</h1>  
            <p className='' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>  
            </div>
        </div>
    </div>
  )
}

export default HomeInnovativeSection