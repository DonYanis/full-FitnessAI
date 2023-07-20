import React, { useState } from 'react'
import { Close } from '@mui/icons-material';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { useMainForm } from '../contexts/MainFormContext';

const Notification = () => {

    const {user} = useUser()
    const [notifState, setNotifState] = useState(user ?  user.hasData : false)
    const navigate = useNavigate()
    const {setResult, setLoading} = useMainForm()

    const handleClick = () => {
        setLoading(() => true)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username : user.username}),
        }

        fetch(`http://127.0.0.1:8000/api/users/`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                if(data.status === 'success'){
                    setResult(data.data)
                    localStorage.setItem('fitnessData', JSON.stringify(data.data))
                    setLoading(()=>false)
                    navigate('/result')
                }else{
                    setLoading(()=>false)
                    navigate('/error')
                }
        })
        .catch((error) => {
            setLoading(()=>false)
          navigate('/error')
        })
    }

    return (
        <div className={`${notifState ? 'block' : 'hidden'} notification bg-secondary w-[180px] h-[70px] absolute right-2 top-[90px] px-2 rounded-sm`}>
            <div className='flex flex-row items-center justify-between pt-2'>
                <h1 className='text-primary font-bold text-[17px]'>Welcome Back</h1>
                <Close className='cursor-pointer' onClick={()=>setNotifState(false)}/>
            </div>
            <h3 onClick={handleClick} className='text-primary font-[550] text-[14px] underline hover:text-[#fff] cursor-pointer pb-2'>previous results</h3>
        </div>
    )
}

export default Notification