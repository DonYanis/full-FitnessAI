import React, { useState } from 'react'
import { Close } from '@mui/icons-material';

const Notification = () => {

    const [notifState, setNotifState] = useState(true)

    return (
        <div className={`${notifState ? 'block' : 'hidden'} notification bg-secondary w-[180px] h-[70px] absolute right-2 top-[90px] px-2 rounded-sm`}>
            <div className='flex flex-row items-center justify-between pt-2'>
                <h1 className='text-primary font-bold text-[17px]'>Welcome Back</h1>
                <Close className='cursor-pointer' onClick={()=>setNotifState(false)}/>
            </div>
            <h3 className='text-primary font-[550] text-[14px] underline hover:text-[#fff] cursor-pointer pb-2'>previous results</h3>
        </div>
    )
}

export default Notification