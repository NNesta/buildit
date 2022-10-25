import React from 'react';
import Image from 'next/image';

function ContactSection() {
  return (
    <div className='h-fit w-full pt-40 pb-16 px-16 bg-primaryWhiteAccent'>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col gap-16 text-primaryGreenDarkish'>
            <div className='flex flex-col gap-6'>
            <h4 className='text-primaryGreenish font-medium'>Contact</h4>
             <h1 className='text-3xl font-bold'>Get In Touch</h1>
            </div>
            <div className="flex gap-4 items-center">
            <div className='bg-primarySkyDry py-2 px-3 self-start rounded-md' >
            <Image src='/assets/phone-icon.svg' width={25} height={25}/>
</div>
              <div className='flex flex-col'>
                  <h4>Tel</h4>
                  <h4 className='font-bold'>708-790-0000</h4>
              </div>
            </div>
            <div className="flex gap-4 items-center">
            <div className='bg-primarySkyDry py-2 px-3 self-start rounded-md' >
            <Image src='/assets/email.svg' width={25} height={25}/>
</div>
              <div className='flex flex-col'>
                  <h4>Email</h4>
                  <h4 className='font-bold'>sales@buildit.site</h4>
              </div>
            </div>
            <div className="flex gap-4 items-center">
            <div className='bg-primarySkyDry py-2 px-3 self-start rounded-md' >
            <Image src='/assets/office-icon.svg' width={25} height={25}/>
</div>
              <div className='flex flex-col'>
                  <h4>Office</h4>
                  <h4 className='font-bold max-w-[60%]'>60 Manor Station St.
Fairport, NY 14450</h4>
              </div>
            </div>
        </div>
        <form className='skyGradient flex flex-col gap-8 p-8 rounded-md shadow-md' action="">
         <div className='grid grid-cols-2 gap-4 items-center'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="name">Name</label>
            <input className='rounded-sm border-[1.5px] border-primaryGreenDarkish bg-transparent' type="text" name='name' id='name'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="email">Email</label>
            <input className='rounded-sm border-[1.5px] border-primaryGreenDarkish bg-transparent' type="text" name='email' id='email' />
          </div>
         </div>
         <div className='flex flex-col gap-2'>
         <label htmlFor="subject">Subject</label>
         <input className='rounded-sm border-[1.5px] border-primaryGreenDarkish bg-transparent' type="text" name="subject" id="subject" />
         </div>
         <div className='flex flex-col gap-2'>
         <label htmlFor="subject">Message</label>
         <textarea className='rounded-sm border-[1.5px] border-primaryGreenDarkish bg-transparent'
        //   value={this.state.textAreaValue}
        //   onChange={this.handleChange}
          rows={5}
          cols={5}
        />
         </div>
         <button className='text-white bg-primaryGreen rounded-sm'>Send message</button>
        </form>
        <div>

        </div>
      </div>
    </div>
  )
}

export default ContactSection