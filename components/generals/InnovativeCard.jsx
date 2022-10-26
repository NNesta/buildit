import React from 'react';
import Image from 'next/image';

function InnovativeCard(props) {
    const {title, image, description} = props;
  return (
    <div className='flex flex-col gap-4 max-w-[90%]'>
                <div className='bg-primaryGreenAccent py-2 px-3 self-start rounded-md shadow-md' >
            <Image alt='' src={image} width={25} height={25}/>
</div>
            <h1 className='text-primaryGreenDarkish text-2xl font-bold' >{title}</h1>  
            <p className='max-w-[80%]' >{description} </p>  
            </div>
  )
}

export default InnovativeCard