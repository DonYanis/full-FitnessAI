import React from 'react'
import circle from '../assets/circle.svg'

const Macros = () => {
  return (
    <div className='bg-[#29292C] macros-box w-[30%] min-w-[300px] h-[300px] p-5 m-auto'>
      <div className='flex flex-row items-center justify-between mb-2'>
        <h1 className='text-[#0E8383] text-[20px] font-bold w-[150px] border-b-2'>NUTRIENTS</h1>
        <img src={circle} alt="circle" />
      </div>
      <div className='flex flex-col items-center justify-around w-full h-[70%] pt-2 text- font-semibold'>
        <p className='text-[16px] text-[#fff] w-[90%] flex flex-row items-center justify-between'>
          <span>Calories</span>
          <span>2600</span>
        </p>
        <p className='text-[16px] text-[#fff] w-[90%] flex flex-row items-center justify-between'>
          <span>Protien</span>
          <span>80g</span>
        </p>
        <p className='text-[16px] text-[#fff] w-[90%] flex flex-row items-center justify-between'>
          <span>Carbs</span>
          <span>120g</span>
        </p>
        <p className='text-[16px] text-[#fff] w-[90%] flex flex-row items-center justify-between'>
          <span>Fibres</span>
          <span>30g</span>
        </p>
      </div>
    </div>
  )
}

export default Macros