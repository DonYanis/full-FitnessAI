import React from 'react'
import { useMainForm } from '../contexts/MainFormContext'

const RangeInput = ({name,min,max,unity}) => {
  
  const {mainForm, setMainForm} = useMainForm()

  const handleChange = (e) => {
    
    setMainForm(prev => {
      return {
        ...prev,
        [name] : name === 'height' ? e.target.value / 100 : e.target.value
      }
    })
  } 

  return (
    <div className='w-[70%] pb-20 ranges'>
          <div className='flex flex-row items-center justify-between text-secondary font-semibold text-[18px]'>
            <span>{name.toUpperCase()}</span>
            <span>{mainForm[name]} {unity}</span>
          </div>
          <input onChange={handleChange} value={name === 'height' ? mainForm[name] * 100 : mainForm[name]} type="range" name={name} min={min} max={max} className='w-full range-input' />
        </div>
  )
}

export default RangeInput