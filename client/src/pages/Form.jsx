import React, { useState } from 'react'
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import {GoalsForm, ProfileForm,Arrow} from '../components'

const Form = () => {
  const [formState, setFormState] = useState({profile:'block', goal:'hidden'})
  const navigate = useNavigate()

  const toggleRight = () => {
      setFormState({profile:'hidden', goal:'block'}) 
  }

  const toggleLeft = () => {
    setFormState({profile:'block', goal:'hidden'}) 
  }

  const handleSubmit = () => {
    navigate('/result')
  }

  return (
    <div className='relative pt-[100px] h-full w-full felx flex-col items-center'>

      <Box className='w-full flex flex-row items-center justify-around px-[20%] pb-3'>
        <div className={`w-[25px] h-[25px]  border-4 border-secondary rounded-full ${formState.profile === 'block' ? 'bg-secondary' : ''} `}></div>
        <div className='h-[2px] w-[120px] md:w-[400px] bg-secondary'></div>
        <div className={`w-[25px] h-[25px]  border-4 border-secondary rounded-full ${formState.goal === 'block' ? 'bg-secondary' : ''} `}></div>
      </Box>

      <Box className='w-[100%] relative felx justify-center'>
        <div className={`${formState.profile}`}><ProfileForm/></div>
        <div className={`${formState.goal}`}><GoalsForm/></div>
      </Box>

      <Box className={`w-full flex flex-row flex-wrap items-center ${formState.profile === 'block' ? 'justify-end' : 'justify-around'}`} >
        <div className={`${formState.goal}`}><Arrow type='left' handleClick={toggleLeft}/></div>
        <div className={`${formState.goal}`}><Arrow type='submit' handleClick={handleSubmit}/></div>
        <div className={`${formState.profile} mr-[10%]`}><Arrow type='right' handleClick={toggleRight}/></div>
      </Box>

    </div>
  )
}

export default Form