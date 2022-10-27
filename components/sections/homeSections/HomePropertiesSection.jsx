import React from 'react';
import Image from 'next/image';
import DescriberComponent from '../../generals/DescriberComponent';

function HomePropertiesSection() {
  return (
    <div className='bg-primaryWhiteAccent w-full h-fit'>
      <div className="grid grid-cols-2 gap-16 py-32 px-20 container mx-auto">
        <DescriberComponent subTitle='Available Properties' title='Featured Listing' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in, congue sed ex.' button={{text:'explore'}}/>
        <div className='grid grid-cols-2 gap-4'>
            <div className='flex flex-col gap-4 items-end'>
           <Image alt='' src='/assets/listing-1.png' height={205*1} width={232*1}/>
           <Image alt='' src='/assets/listing-2.png' height={260*1} width={194*1}/>
            </div>
            <div className='flex flex-col gap-4 items-start -mt-28'>
            <Image alt='' src='/assets/listing-3.png' height={331*1} width={243*1}/>
           <Image alt='' src='/assets/listing-4.png' height={135*1} width={215*1}/>
            </div>

        </div>
      </div>
    </div>
    
  )
}

export default HomePropertiesSection