import React from 'react';
//import ReactDOM  from 'react-dom';
import ReactDOM from 'react-dom/client'

import { BrowserRouter  } from 'react-router-dom';

import { UserProvider } from './contexts/UserContext';
import { MainFormProvider } from './contexts/MainFormContext';

import './styles/index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
      <BrowserRouter>
            <MainFormProvider>
                  <UserProvider>
                        <App/>
                  </UserProvider>
            </MainFormProvider>
      </BrowserRouter>
);

