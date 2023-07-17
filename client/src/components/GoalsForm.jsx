import React from 'react'
import {GoalData} from '../data'
import ChoicesList from './ChoicesList'

const GoalsForm = () => {
  return (
    <div className=' form md:h-[90%] flex flex-col md:flex-row items-center justify-between px-0 md:px-[20px] '>
      <div className='px-5 flex flex-col items-start justify-around min-h-[400px] h-[90%]'>

        {
          GoalData.map((e,index) => <ChoicesList key={index} title={e.title} choices={e.choices} size='big'/>)
        }

      </div>
    </div>
  )
}

export default GoalsForm