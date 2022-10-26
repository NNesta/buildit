import React from 'react'

function CallerComponent(){
  return (
    <div className='bg-primarySkyDry h-72 w-full pb-8 max-w-[80%] mx-auto'>
    <div className='flex justify-between items-center  border-y-[1px] border-primaryGreenAccent py-8'>
    <h1 className='text-primaryGreenDarkish text-2xl font-semibold'>Call us</h1>
    <div className='flex gap-8 items-center'>
        <button className='callButtonGradient text-primaryWhiteAccent py-2 px-16'>Call</button>
        <button className='bg-primarySky text-primaryGreenDarkish py-2 px-12'>Email</button>
    </div>
    </div>
    </div>
  )
}

export default CallerComponent;