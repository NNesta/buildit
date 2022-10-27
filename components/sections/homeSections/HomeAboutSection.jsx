import React from 'react';
import Image from 'next/image';
import PartnersLogos from '../../generals/PartnersLogos';
import DescriberComponent from '../../generals/DescriberComponent';

function HomeAboutSection() {
  return (
    <div className='w-full h-fit bg-primarySkyDry py-20'>
      <div className='container mx-auto px-20'>
        <PartnersLogos/>
        <div className="grid grid-cols-2  gap-20 w-full my-12">
          <div className='w-full h-full '>
            <Image src='/assets/ownerProfile.png' width={500} height={375}/>
          </div> 
          <DescriberComponent subTitle='About us' title='Owner and investor with a reputation' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in, congue sed ex.' button={{text:'Explore'}} />
          
        </div>
        </div>
    </div>
  )
}

export default HomeAboutSection;