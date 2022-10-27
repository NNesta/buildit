import React from 'react';
import InnovativeCard from '../../generals/InnovativeCard';

function HomeInnovativeSection() {
    const innovatives = [
        {
            title: 'Featured Listing',
            image: '/assets/listing.svg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            title: 'Available Properties',
            image: '/assets/chevrons.svg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            title: 'In the News',
            image: '/assets/news-icon.svg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        } 
    ]
  return (
    <div className='container px-20 h-fit mx-auto flex flex-col gap-8 py-32 z-30 relative '>
       <h1 className='text-6xl text-primaryGreenDarkish font-bold mx-auto text-center'>Innovative Execution</h1>
        <div className="grid grid-cols-3 mx-auto gap-16">
           {
            innovatives.map((innovative, index)=><InnovativeCard key={index} title={innovative.title} image={innovative.image} description={innovative.description}/>)
           }
        </div>
    </div>
  )
}

export default HomeInnovativeSection