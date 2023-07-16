import React from 'react'
import { useLoginForm } from '../contexts/UserContext'

const Login = () => {

    const {loginForm, handleChange, handleSubmit} = useLoginForm()

    return (
        <div className='mb-[50px]'>
            <h1 className='pt-[100px] pb-[50px] text-[45px] md:text-[70px] tracking-[8px] font-outline-2 '>FITNESS-AI</h1>
            <div className='text-[20px] flex flex-col justify-center'>
                <input 
                    className='login-input text-[#fff]' 
                    type='text' 
                    name='username' 
                    placeholder='Username' 
                    onChange={handleChange}
                    value={loginForm.username}
                />
                <input 
                    className='login-input text-secondary ' 
                    type='password' 
                    name='password' 
                    placeholder='Password'
                    onChange={handleChange}
                    value={loginForm.password}
                />
            </div>
        </div>
    )
}

export default Login