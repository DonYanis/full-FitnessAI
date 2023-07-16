import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'


const Navbar = () => {
  return (
    <nav className='w-full h-[80px] bg-primary text-white z-1 flex flex-row items-center justify-between px-4'>
      <Link to='/' className="logo flex flex-row items-end" >
      <img src={logo} alt="logo" className='w-[50px] md:w-[70px]'/>
      <h1 className='text-[18px] md:text-[24px] text-[#fff] px-4'>FITNESS-<span className='text-secondary'>AI</span></h1>
      </Link>
    </nav>
  )
}

export default Navbar