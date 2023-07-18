import React from 'react'
import heart from '../assets/heart.svg'

const HealthResult = () => {
  return (
    <div className='flex flex-col min-w-[45%] card'>
      <div className='flex flex-row items-center justify-start'>
        <img src={heart} alt="heart" />
        <h1 className='font-outline-2 text-[18px] tracking-[4px] px-1'>HEALTH</h1>
      </div>
      <div className='w-full flex flex-col items-start font-semibold justify-between px-5 py-3 border border-blueSpecial rounded-[5px] '>
        <h1 className='text-[18px] text-secondary py-2'>HEALTH STATE <span className='text-[#fff] pl-4'>PERFECT</span></h1>
        <h1 className='text-[18px] text-secondary py-2'>FOOD CONSUMPTION GOAL <span className='text-[#fff] pl-4'>MAINTAIN</span></h1>
      </div>
    </div>
  )
}

export default HealthResult