import React from 'react';
import Image from 'next/image';

function OwnerSection() {
  return (
    <div className='w-full h-screen bg-primarySkyDry py-8'>
        <div className="flex items-center border-y-[1px] border-primaryGreenAccent px-16 py-4 gap-8 w-full max-w-[80%] mx-auto">
         <Image src='/assets/vector-1.svg' height={75} width={140}/>
         <Image src='/assets/vector-2.svg' height={75} width={140}/>
         <Image src='/assets/vector-3.svg' height={75} width={140}/>
         <Image src='/assets/vector-4.svg' height={75} width={140}/>
         <Image src='/assets/vector-5.svg' height={75} width={140}/>
        </div>
        <div className="grid grid-cols-2 justify-center w-full max-w-[90%] mx-auto my-12 gap-8">
          <div className='w-full h-full '>
            <img className='object-cover max-w-[90%] ml-auto max-h-[90%] my-auto' src="/assets/ownerprofile.png" alt="" />

          {/* <Image className='mx-auto'  src='/assets/ownerProfile.png' width={500*0.65} height={375*0.8} /> */}
          </div> 
          <div className='flex flex-col gap-4 max-w-[70%] '>
            <h4 className='text-base text-primaryGreenish font-mediun'>About us</h4>
            <h1 className='text-4xl text-primaryGreenDarkish font-bold'>Owner and investor with a reputation</h1>
            <p className='text-primaryGreenAccent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet. Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor, viverra vel ultrices in, congue sed ex.</p>
            <button className='text-white bg-primaryGreen px-8 py-2 self-start rounded-md'>Explore</button>
          </div>
        </div>
    </div>
  )
}

export default OwnerSection;