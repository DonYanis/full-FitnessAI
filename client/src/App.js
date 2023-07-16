import React from 'react';
import { BrowserRouter  , Route, Routes } from 'react-router-dom';

import {Main, Home, Form, Error} from './pages'
import { UserProvider } from './contexts/UserContext';

export default function App(){
  
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Main/>}>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Home/>}/>
            <Route path='form' element={<Form/>}/>
            <Route path='*' element={<Error/>}/>
          </Route>
        </Routes>
        </UserProvider>
      </BrowserRouter>
    
  ) 
}