import React from 'react'
import { ArrowRight, ArrowLeft, SendRounded} from '@mui/icons-material';
import { Button } from '@mui/material';

const Arrow = ({type, handleClick}) => {
  return (

      <Button 
        onClick={handleClick}
        variant="outlined" 
        style={{ backgroundColor: "#2FE6DE" ,border:'0px', color: "#1A1B1F",fontSize:'15px', fontWeight:'bold' , borderRadius:'5px', margin: '5px'}} 
        className='h-[50px] w-[150px] flex flex-row items-center justify-around'
      >
        {type === 'left' ?
            <>
                <ArrowLeft />
                PREV
            </>
        : type === 'right' ?
            <>
                NEXT
                <ArrowRight />
            </>
        : type === 'submit' ?
            <>
                SUBMIT
                <SendRounded />
            </>
        :
            <></>
        }
      </Button>
  )
}

export default Arrow