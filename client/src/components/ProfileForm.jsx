import React from 'react'
import {ProfileData} from '../data'
import ChoicesList from './ChoicesList'
import RangeInput from './RangeInput'

const ProfileForm = () => {
  return (
   <div className='m-auto pt-3 form md:h-[90%] flex flex-col md:flex-row items-center justify-between px-0 md:px-[20px] '>
      <div className='px-5 flex flex-col  items-start min-h-[300px] h-[90%]'>

        {
          ProfileData.map((e,index) => <ChoicesList key={index} title={e.title} formOption={e.formOption} choices={e.choices}/>)
        }

      </div>

      <div className='flex flex-col pt-2 md:pt-0 w-[80%] md:max-w-[40%] 
      items-center justify-around min-h-[400px] h-[60%]'>
        <RangeInput name='height' min={50} max={250} unity='m'/>
        <RangeInput name='weight' min={20} max={200} unity='kg'/>
      </div>

    </div> 

  )
}

export default ProfileForm