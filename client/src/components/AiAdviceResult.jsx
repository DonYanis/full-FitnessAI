import React from 'react'
import brain from '../assets/brain.svg'
import dot from '../assets/dot.svg'
import eatIcon from '../assets/eat.svg'
import cross from '../assets/cross.svg'

const AiAdviceResult = ({advice, eat, avoid}) => {
  return (
    <div className='flex flex-col min-w-[60%] pb-8 ai-result'>
      <div className='flex flex-row items-center justify-start'>
        <img src={brain} alt="brain" />
        <h1 className='font-outline-2 text-[18px] tracking-[4px] px-1'>AI ADVICE</h1>
      </div>
      <div className='w-full flex flex-col items-start font-semibold justify-between px-5 py-3 border border-blueSpecial rounded-[5px] '>
        <div className='flex flex-col items-start justify-between'>
        {advice.map((e,index)=> (
            <div key={index} className='flex flex-row items-center py-2'>
              <img src={dot} alt="dot" />
              <h1 className='text-[#fff] pl-1'>{e}</h1>
            </div>
        ))}
          
        </div>

        <div className='flex flex-row items-center justify-around w-full mt-4 food-container'>
          <div className='flex flex-col justify-around min-h-[100px]'>
            <div className='flex flex-row items-center justify-start'>
              <img src={eatIcon} alt="icon" />
              <h1 className='text-secondary font-bold text-[18px] pl-1'>FOOD TO EAT</h1>
            </div>
            <p className='text-[#fff] font-semibold'>{eat.map(e=>e.replace('_',' ')).join(', ')}</p>
          </div>
          <div className='bg-secondary h-[90px] w-[1px] bar mx-2'></div>
          <div className='flex flex-col justify-around min-h-[100px]'>
            <div className='flex flex-row items-center justify-start'>
              <img src={cross} alt="icon" />
              <h1 className='text-secondary font-bold text-[18px] pl-1'>FOOD TO AVOID</h1>
            </div>
            <p className='text-[#fff] font-semibold'>{avoid.map(e=>e.replace('_',' ')).join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AiAdviceResult