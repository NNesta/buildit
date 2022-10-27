import React from 'react';
import Button from './Button';

function DescriberComponent(props) {
    const {subTitle, title, description,button} = props;
  return (
    <div className="flex flex-col gap-4 items-start">
            <h4 className='text-base text-primaryGreenish font-semibold'>{subTitle}</h4>
            <h1 className='text-primaryGreenDarkish text-3xl font-bold max-w-[70%]'>{title}</h1>
            <p className='text-primaryGreenAccent max-w-[80%]'>{description}</p>
            {button && <Button name={button.text}/>}

        </div>
  )
}

export default DescriberComponent;