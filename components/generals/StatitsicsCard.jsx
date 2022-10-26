import React from 'react'

function StatitsicsCard(props) {
    const {numbers, image} = props;
  return (
    <div className="flex gap-4 items-center mx-auto  pl-12">
              <div className='bg-primaryGreenAccent px-3 py-2'>
               <img src={image} alt="" />
              </div>
              <div className='flex flex-col'>
                <h1 className='text-primaryGreenDarkish text-xl font-bold'>{`>${numbers}`}</h1>
                 <p className='text-primaryGreenAccent'>Number</p>
              </div>
            </div>
  )
}

export default StatitsicsCard