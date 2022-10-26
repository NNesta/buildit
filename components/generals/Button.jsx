import React from 'react'

function Button(props) {
    const {name,type} = props;
  return (
    !type?<button className='callButtonGradient text-primaryWhiteAccent py-2 px-16 font-semibold'>{name}</button>:<button className='bg-primarySky text-primaryGreenDarkish py-2 px-12 font-semibold'>{name}</button>
  )
}

export default Button