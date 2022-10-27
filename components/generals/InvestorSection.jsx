import React from 'react';
import Image from 'next/image';

function InvestorSection(props) {
    const {subTitle, title, description} = props;
  return (
    <div className="headerGradient py-20 h-fit relative w-full z-10 overflow-hidden">
        <div className='container mx-auto h-screen'>
            <div className='absolute inset-0 h-screen'>

    <Image src='/assets/investor.png' width={1441} height={868} />
            </div>
            
            <div className="flex flex-col gap-8 items-center p-32 text-center">
            <h4 className='text-base text-primaryGreenish font-semibold'>{subTitle}</h4>
            <h1 className='text-primaryGreenDarkish text-3xl font-bold max-w-[70%]'>{title}</h1>
            <p className='text-primaryGreenAccent max-w-[80%]'>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default InvestorSection