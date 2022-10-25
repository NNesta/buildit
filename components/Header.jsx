import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <div className='bg-gradient-to-b from-[#C6DBFF] to-[#E1EBFA] w-full p-16 h-screen relative'>
        <div className="max-h-full overflow-hidden absolute top-0 right-0 bottom-0 object-contain">
        <img className='' src="/assets/Figure.svg" alt="" />
        </div>
     <div className="grid grid-cols-7 mt-16">
        <div className="col-span-3 my-auto flex flex-col gap-8">
       <h1 className='text-6xl text-primaryGreenDarkish font-bold '>Development company</h1>
       <p className='text-primaryGreenLight text-xl'>Forward-thinking real estate developer, owner and investor with a reputation</p>
       <div className='flex gap-8'>
        <button className='bg-primaryGreen text-white px-4 py-2 rounded-md'>Services</button>
        <button className='bg-primarySky text-gray-800 px-4 py-2 rounded-md'>About the company</button>
       </div>
       </div>
       <div className="col-span-4 flex flex-col gap-4 items-center">
       <ul className="flex  items-end gap-4">
        
        <li><Image src='/assets/house-1.png' width={80*1.4} height={80*1.4}/></li>
        <li><Image src='/assets/house-2.png' width={125*1.4} height={125*1.4}/></li>
        <li><Image src='/assets/house-3.png' width={75*1.4} height={75*1.4}/></li>
        </ul>
        <ul className=" flex gap-8 ">
        <li><Image src='/assets/house-4.png' width={170*1.4} height={170*1.4}/></li>
        <li className='pr-12'><Image src='/assets/house-5.png' width={105*1.4} height={105*1.4}/></li>
       </ul></div>
        </div>
     </div>
    
  )
}

export default Header