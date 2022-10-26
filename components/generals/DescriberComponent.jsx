import React from 'react'

function DescriberComponent(props) {
    const {subTitle, title, description,button} = props;
  return (
    <div className="flex flex-col gap-4">
            <h4 className='text-base text-primaryGreenish font-semibold'>{subTitle}</h4>
            <h1 className='text-primaryGreenDarkish text-3xl font-bold max-w-[70%]'>{title}</h1>
            <p className='text-primaryGreenAccent max-w-[80%]'>{description}</p>
            {button && <button className='text-white bg-primaryGreen px-8 py-2 self-start rounded-md'>{button.text}</button>}

        </div>
  )
}

export default DescriberComponent;