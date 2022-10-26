import React from 'react'

function ContactForm() {
  return (
   
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
         <button className='text-white bg-primaryGreen rounded-md py-2'>Send message</button>
        </form>
   
  )
}

export default ContactForm