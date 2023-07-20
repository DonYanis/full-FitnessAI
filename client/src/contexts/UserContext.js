import React, {createContext, useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useMainForm } from "./MainFormContext";
import {apiUrl} from '../data/index'

const UserContext = createContext()
const FormContext = createContext()

export function useUser() {
  return useContext(UserContext)
}

export function useLoginForm() {
  return useContext(FormContext)
}


export function UserProvider({children}){
  
  const [user, setUser] = useState(null)
  const [loginForm, setLoginForm] = useState({username:'', password:''})
  const [loginMsg, setLoginMsg] = useState('')

  const navigate = useNavigate()
  const {setMainForm} = useMainForm()

  function handleChange(e){
    setLoginForm(prev => {
      return {
        ...prev,
        [e.target.name] : e.target.value,
      }
    })
  }

  function handleLogout(){
    setUser(null)
    navigate('/')
  }

  function handleSubmit() {

    if(loginForm.username.length > 0 && loginForm.password.length > 0){

      //crypt pass ...
      const cryptedPass = loginForm.password
      
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username :loginForm.username,
          password: cryptedPass
        }),
      }

      fetch(`${apiUrl}/api/login/`, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if(data.status === 'success'){
            setUser({username : data.username, hasData: data.hasData})
            setLoginMsg('')
            setMainForm(prev => ({...prev, username: data.username}))
            localStorage.setItem('fitnessUser', JSON.stringify({username : data.username, hasData: data.hasData}))
            navigate('/form')
          }else{
            setLoginMsg(data.message + ' !')
          }
        })
        .catch((error) => {
          navigate('/error')
        })
    }
    else {
      return null
    }
  }



  return (
      <UserContext.Provider value={{user,handleLogout, setUser}}>
        <FormContext.Provider value={{loginForm, handleChange, handleSubmit, loginMsg}}>
          {children}
        </FormContext.Provider>
      </UserContext.Provider>
  ) 
}