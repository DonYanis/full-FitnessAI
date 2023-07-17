import React from 'react'

const RangeInput = ({name,min,max,unity}) => {
  return (
    <div className='w-[70%] pb-20 ranges'>
          <div className='flex flex-row items-center justify-between text-secondary font-semibold text-[18px]'>
            <span>{name.toUpperCase()}</span>
            <span>180 {unity}</span>
          </div>
          <input type="range" name={name} min={min} max={max} className='w-full range-input' />
        </div>
  )
}

export default RangeInput