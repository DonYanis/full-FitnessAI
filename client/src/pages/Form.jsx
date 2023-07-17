import React, {useContext} from 'react'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'
import { Box, Stack, Typography, Button } from '@mui/material';

import {GoalsForm, ProfileForm} from '../components'
import { ArrowRight, ArrowLeft} from '@mui/icons-material';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} className="absolute left-5 bottom-[10%]">
      <Button variant="outlined" className='h-[50px] w-[150px] flex flex-row items-center justify-around'>
        <ArrowLeft />
        PREV
      </Button>
    </Typography>
  )
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollNext()} className="absolute right-5 bottom-[10%]">
      <Button variant="outlined"  className='h-[50px] w-[150px] flex flex-row items-center justify-around'>
      NEXT
      <ArrowRight />
      </Button>
    </Typography>
  )
}




const Form = () => {
  const data = [<ProfileForm/>,<GoalsForm/>]
  return (
    <Stack className='pt-[100px] h-full w-full'>

      <Box className='w-full flex flex-row items-center justify-around px-[20%] pb-3'>
        <div className='w-[25px] h-[25px]  border-4 border-secondary rounded-full bg-secondary'></div>
        <div className='h-[2px] w-[120px] md:w-[400px] bg-secondary'></div>
        <div className='w-[25px] h-[25px]  border-4 border-secondary rounded-full'></div>
      </Box>

      <Box className='w-[100%]'>
         
         <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {data.map((e,index) => 
            <Box 
              key={index}
              itemId={index}
              title={index}
            >
              <>{e}</>
            </Box>
            )}
         </ScrollMenu>
      
      </Box>
    </Stack>
  )
}

export default Form