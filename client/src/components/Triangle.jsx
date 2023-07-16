import React from 'react'
import triangle from '../assets/triangle.svg'
const Triangle = () => {
  return (
    <img 
      src={triangle} 
      alt="triangle" 
      className=' absolute w-[70%] right-0 bottom-[-10px] mx-0 hidden md:block triangle'
    />
  )
}

export default Triangle