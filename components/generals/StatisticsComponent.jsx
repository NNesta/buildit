import React from 'react'

function StatisticsComponent() {
    const statisticsArray = [
        {numbers:200,
        icon: "/assets/devicon-1.svg"
        },
        {numbers:70,
        icon: "/assets/devicon-2.svg"
        },
        {
            numbers:20,
        icon: "/assets/devicon-3.svg"
        },
    ]
  return (
    <div className='developmentGradient h-24 w-full max-w-[80%] mx-auto '>
            <div className="grid grid-cols-3 divide-x-[1px] divide-primaryGreenDarkish w-full max-w-[90%] mx-auto h-full items-center">
                
            {statisticsArray.map(item=>
            <div className="flex gap-4 items-center mx-auto  pl-12">
              <div className='bg-primaryGreenAccent px-3 py-2'>
               <img src={item.image} alt="" />
              </div>
              <div className='flex flex-col'>
                <h1 className='text-primaryGreenDarkish text-xl font-bold'>{`>${item.numbers}`}</h1>
                 <p className='text-primaryGreenAccent'>Number</p>
              </div>
            </div>)}
           
            </div>
           
        </div>
  )
}

export default StatisticsComponent