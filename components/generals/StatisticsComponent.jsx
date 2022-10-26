import React from 'react';
import StatitsicsCard from './StatitsicsCard';

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
                
            {statisticsArray.map(item=><StatitsicsCard numbers={item.numbers} image={item.image} key={Math.random()} />
            )}
           
            </div>
           
        </div>
  )
}

export default StatisticsComponent