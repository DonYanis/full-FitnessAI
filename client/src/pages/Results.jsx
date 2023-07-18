import React from 'react'


import {HealthResult, TrainingResult, AiAdviceResult, Macros} from '../components'

const Results = () => {
  return (
    <div className='relative pt-[100px] pb-4 px-4 h-full w-full felx flex-col items-center'>

      <div className='flex flex-row flex-wrap items-center justify-between py-4'>

        <HealthResult/>

        <TrainingResult/>

      </div>

      <div className='flex flex-row flex-wrap items-center justify-between pt-4'>
        <AiAdviceResult/>

        <Macros/>
      </div>
    </div>

  )
}

export default Results