import React from 'react';
import { BrowserRouter  , Route, Routes } from 'react-router-dom';

import {Main, Home, Form, Error, Results} from './pages'
import { UserProvider } from './contexts/UserContext';
import { MainFormProvider } from './contexts/MainFormContext';

export default function App(){
  
  return (
    <BrowserRouter>
      <UserProvider>
          <MainFormProvider>
            <Routes>
              <Route path='/' element={<Main/>}>
                <Route index element={<Home/>}/>
                <Route path='login' element={<Home/>}/>
                <Route path='form' element={<Form/>}/>
                <Route path='result' element={<Results/>}/>
                <Route path='*' element={<Error/>}/>
              </Route>
            </Routes>
          </MainFormProvider>
        </UserProvider>
      </BrowserRouter>
    
  ) 
}