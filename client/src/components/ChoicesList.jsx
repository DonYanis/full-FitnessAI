import React from 'react'

import RadioBtn from './RadioBtn'

const ChoicesList = ({title,choices, size, formOption}) => {
  return (
    <div className='flex flex-col py-2'>
        <h1 className={` text-[18px] text-secondary font-semibold pb-2 `}>{title}</h1>
        <div className='flex flex-wrap items-center justify-start'>
            {choices.map(choice=>{
                return (
                    <div key={choice.value} className={`${size==='big' ? 'px-2 md:px-5' : 'px-5'} flex flex-col items-center justify-center py-2 `}>
                        <RadioBtn  value={choice.value} formOption={formOption} size={size} />
                        {choice.extra ?  <span className='text-[12px] text-[#817e7e]'>{choice.extra}</span> : ''}
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ChoicesList