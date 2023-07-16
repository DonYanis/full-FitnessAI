import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components'

export default function Main(){
  
  return (
      <div className='bg-primary'>
        <Navbar />
        <Outlet/>
      </div>
  ) 
}