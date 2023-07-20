import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';

import {Main, Home, Form, Error, Results} from './pages'
import { useUser } from './contexts/UserContext';
import { useMainForm } from './contexts/MainFormContext';

export default function App(){
  
  const {setUser} = useUser()
  const {setMainForm} = useMainForm()
  
  useEffect(() => {
    const storedUser = localStorage.getItem('fitnessUser');

    if (storedUser) {

      setUser(JSON.parse(storedUser))
      setMainForm(prev => ({...prev, username: JSON.parse(storedUser).username}))
    }
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Main/>}>
        <Route index element={<Home/>}/>
        <Route path='login' element={<Home/>}/>
        <Route path='form' element={<Form/>}/>
        <Route path='result' element={<Results/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
  ) 
}