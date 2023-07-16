import React from 'react'
import { Link } from 'react-router-dom'

const HomeButton = ({text, link, handleSubmit}) => {
  return (
    <>
      {
      text === 'LOGIN' ? 
        <button onClick={handleSubmit} className='flex items-center justify-center w-full'> 
          <div className='relative bg-transparent border border-1 border-blueSpecial w-[190px] h-[64px] rounded-[9px]'>
              <div className='start-btn font-bold text-[24px] absolute top-1 left-1 hover:top-0 hover:left-0 transition-all ease-linear'>
                  {text}
              </div>
          </div>
        </button>
      :
        <Link to={link} className='flex items-center justify-center w-full'> 
          <div className='relative bg-transparent border border-1 border-blueSpecial w-[190px] h-[64px] rounded-[9px]'>
              <div className='start-btn font-bold text-[24px] absolute top-1 left-1 hover:top-0 hover:left-0 transition-all ease-linear'>
                  {text}
              </div>
          </div>
        </Link>
      }
    </>
  )
}

export default HomeButton