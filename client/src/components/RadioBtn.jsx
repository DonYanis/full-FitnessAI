import React from 'react'

const RadioBtn = ({value,size}) => {
  return (
    <div 
        className={` ${size==='big' ? 'px-0 text-[14px] w-[100px] h-[50px] md:text-[18px] md:w-[140px] md:h-[60px]' : 'px-2 text-[14px] w-[90px] h-[40px]'}
          flex items-center text-center justify-center 
          bg-transparent border border-1 rounded-[10px]
        border-blueSpecial text-[#fff] font-semibold
          cursor-pointer rad-btn hover:bg-secondary hover:border-0`}>
            {value}
    </div>
  )
}

export default RadioBtn