import React from 'react'
import { useMainForm } from '../contexts/MainFormContext'

const RadioBtn = ({value,size,formOption}) => {
  const {mainForm, setMainForm} = useMainForm()
  return (
    <div onClick={()=> setMainForm(prev => {return {...prev, [formOption]: value.replace(' ','')}})}
        className = { 
        `${ size==='big' ? 
          'px-0 text-[14px] w-[100px] h-[50px] md:text-[18px] md:w-[140px] md:h-[60px]' 
          : 
          'px-2 text-[14px] w-[90px] h-[40px]'}
        ${ mainForm[formOption] === value.replace(' ','') ?
          'bg-secondary' : 'bg-primary' }
          flex items-center text-center justify-center 
          border border-1 rounded-[10px] border-blueSpecial
          text-[#fff] font-semibold cursor-pointer rad-btn
          hover:bg-secondary hover:border-0`}
    >
      {value}
    </div>
  )
}

export default RadioBtn