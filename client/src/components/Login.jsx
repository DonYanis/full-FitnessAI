import React from 'react'
import { useLoginForm } from '../contexts/UserContext'

const Login = () => {

    const {loginForm, handleChange, loginMsg} = useLoginForm()

    return (
        <div className='mb-[50px]'>
            <h1 className='pt-[100px] pb-[50px] text-[45px] md:text-[70px] tracking-[8px] font-outline-2 '>FITNESS-AI</h1>
            <div className='text-[20px] flex flex-col justify-center'>
                <h1 className='h-[30px] text-[#146C94] text-[14px] pl-2'>{loginMsg}</h1>
                <input 
                    className='login-input text-[#fff]' 
                    type='text' 
                    name='username' 
                    placeholder='Username' 
                    onChange={handleChange}
                    value={loginForm.username}
                    maxLength={12}
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