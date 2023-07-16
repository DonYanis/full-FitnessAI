import React from 'react'
import robot from '../assets/robot-curl.png'
import { useLocation } from 'react-router-dom'

import {Triangle, HomeButton, HomeText, Login} from '../components'
import { useLoginForm } from '../contexts/UserContext'

const Home = () => {

  const location = useLocation()
  const {pathname} = location
  const {handleSubmit} = useLoginForm()
  
  return (
    <div className='relative home md:overflow-hidden'>
      <Triangle/>
      <div className='w-full  md:w-[40%] pl-10 pt-[150px] h-[70vh] flex flex-col justify-around'>
        {
          pathname === '/login' ? 
            <>
              <Login/>
              <HomeButton text='LOGIN' handleSubmit={handleSubmit}/> 
            </>
          :
            <>
              <HomeText/>
              <HomeButton text='START NOW' link='/login'/> 
            </>
        }
      </div>

      <div className='hidden md:block md:w-[800px] md:h-[500px] absolute bottom-0 md:left-[30%] robot'>
        <img src={robot} alt="robot" className='w-[100%] h-[100%]' />
      </div>

    </div>
  )
}

export default Home