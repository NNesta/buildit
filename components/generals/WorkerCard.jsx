import React from 'react';
import Image from 'next/image';

function WorkerCard(props) {
    const{name, position, image} = props;
  return (
    <div className='flex flex-col teamCardDropShadow'>
         <Image src={image} width={328*0.85} height={278*0.85}/>
         <div className='flex flex-col teamGradient px-4 py-2'>
        <p className='font-semibold text-primaryGreenDarkish'>{name}</p>
        <p className=' text-primaryGreenDarkish'>{position}</p>
         </div>
            </div>
  )
}

export default WorkerCard