import React, {createContext, useContext, useState} from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  function handleChange(e){
    setLoginForm(prev => {
      return {
        ...prev,
        [e.target.name] : e.target.value,
      }
    })
  }

  function handleSubmit() {

    if(loginForm.username.length > 0 && loginForm.password.length > 0){
      //check some conds
      
      //post request to api

      //setting the user
      setUser(loginForm.username)
      console.log(user)

      //local storage

      //redirect 
      navigate('/form')
      //in case error redirect to '/error'

    }else {
      return null
    }

  }

  return (
      <UserContext.Provider value={user}>
        <FormContext.Provider value={{loginForm, handleChange, handleSubmit}}>
          {children}
        </FormContext.Provider>
      </UserContext.Provider>
  ) 
}