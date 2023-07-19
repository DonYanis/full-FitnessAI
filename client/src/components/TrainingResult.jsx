import React from 'react'
import dumbbell from '../assets/dumbbell.svg'

const TrainingResult = ({training, program}) => {
  return (
    <div className='flex flex-col min-w-[45%] card'>
      <div className='flex flex-row items-center justify-start'>
        <img src={dumbbell} alt="heart" />
        <h1 className='font-outline-2 text-[18px] tracking-[4px] px-1'>TRAINING</h1>
      </div>
      <div className='flex flex-col items-start font-semibold justify-between px-5 py-3 border border-blueSpecial rounded-[5px] '>
        <h1 className='text-[18px] text-secondary py-2'>TRAINING INTENSITY <span className='text-[#fff] pl-4'>{training}</span></h1>
        <h1 className='text-[18px] text-secondary py-2'>RECOMMENDED TRAINING PROGRAM <span className='text-[#fff] pl-4'>{program.map(e=>e.replace('_',' ')).join(', ')}</span></h1>
      </div>
    </div>
  )
}

export default TrainingResult