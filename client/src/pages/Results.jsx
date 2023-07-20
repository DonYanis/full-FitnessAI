import React, { useEffect } from 'react'

import {HealthResult, TrainingResult, AiAdviceResult, Macros} from '../components'
import { useMainForm } from '../contexts/MainFormContext'

const Results = () => {
  const {result, setResult} = useMainForm()

  useEffect(() => {
    const storedData = localStorage.getItem('fitnessData')
    
    if (storedData) {
      if ( result.health === '' )
        setResult(JSON.parse(storedData))
    }
  }, []);


  return (
    <div className='relative pt-[100px] pb-4 px-4 h-full w-full felx flex-col items-center'>

      <div className='flex flex-row flex-wrap items-center justify-between py-4'>

        <HealthResult health={result.health} food={result.food}/>

        <TrainingResult training={result.training} program={result.program}/>

      </div>

      <div className='flex flex-row flex-wrap items-center justify-between pt-4'>
        <AiAdviceResult advice={result.advice} eat={result.eat} avoid={result.avoid}/>

        <Macros macros={result.macros}/>
      </div>
    </div>

  )
}

export default Results