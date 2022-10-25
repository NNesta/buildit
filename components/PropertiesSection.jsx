import React from 'react';
import Image from 'next/image';

function PropertiesSection() {
  return (
    <div className='bg-primaryWhiteAccent w-full h-screen'>
      <div className="grid grid-cols-2 gap-4 max-w-[80%] mx-auto py-32">
        <div className="flex flex-col gap-4">
            <h4 className='text-base text-primaryGreenish font-semibold'>Available Properties</h4>
            <h1 className='text-primaryGreenDarkish text-3xl font-bold'>Featured Listing</h1>
            <p className='text-primaryGreenAccent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in, congue sed ex.</p>
            <button className='text-white bg-primaryGreen px-8 py-2 self-start rounded-md'>Explore</button>

        </div>
        <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col gap-4 items-end'>
           <Image src='/assets/listing-1.png' height={205*0.8} width={232*0.8}/>
           <Image src='/assets/listing-2.png' height={260*0.8} width={194*0.8}/>
            </div>
            <div className='flex flex-col gap-4 items-start -mt-16'>
            <Image src='/assets/listing-3.png' height={331*0.8} width={243*0.8}/>
           <Image src='/assets/listing-4.png' height={135*0.8} width={215*0.8}/>
            </div>

        </div>
      </div>
    </div>
  )
}

export default PropertiesSection