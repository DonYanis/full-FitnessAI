import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { useUser } from '../contexts/UserContext'
import { Button } from '@mui/material'
import { Logout} from '@mui/icons-material';

const Navbar = () => {
  const {user, handleLogout} = useUser()
  return (
    <nav className='w-full h-[80px] bg-primary text-white z-1 flex flex-row items-center justify-between px-4'>
      <Link to='/' className="logo flex flex-row items-end" >
      <img src={logo} alt="logo" className='w-[50px] md:w-[70px]'/>
      <h1 className='logo-text text-[18px] md:text-[24px] text-[#fff] px-4'>FITNESS-<span className='text-secondary'>AI</span></h1>
      </Link>
      {user && 
      <div className='user-info items-center w-[150px] justify-between  '>
        <div className='user text-[18px] text-[#fff]'>#{user.username}</div>
        <Button 
          onClick={handleLogout}
          variant="outlined" 
          style={{ 
            backgroundColor: "#2FE6DE" ,border:'0px', color: "#1A1B1F",
            fontSize:'15px', fontWeight:'semibold' , borderRadius:'5px', 
            margin: '0px 5px'
          }} 
          className='logo-btn h-[30px] w-[70px] flex flex-row items-center justify-around'
        >
        <Logout/>
        </Button>
      </div>
      }
    </nav>
  )
}

export default Navbar
