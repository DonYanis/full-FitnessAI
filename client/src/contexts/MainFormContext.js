import React, {createContext, useContext, useState} from "react";
import { useNavigate } from "react-router-dom";

const MainFormContext = createContext()

export function useMainForm() {
  return useContext(MainFormContext)
}



export function MainFormProvider({children}){

  const [loading, setLoading] = useState(false)

  const [mainForm, setMainForm] = useState({
    username: '',
    age : "YOUNGADULT",
    gender : "MALE",
    activity : "MEDIUM",
    height: 1.8,
    weight : 70,
    goal : "MUSCLE",
    schedule : "FLEXIBLE"
  })

  const [result, setResult] = useState({
    health: "",
    food: "",
    training: "",
    program: [],
    eat: [],
    avoid: [],
    advice: [],
    macros: {
        calories: 0,
        protein: 0,
        fat: 0,
        carbs: 0,
        fibers: 0
    }
  })

  const navigate = useNavigate();

  const handleSubmit = () => {

    setLoading(()=>true)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mainForm),
    }
    
    fetch(`http://127.0.0.1:8000/api/home/`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if(data.status === 'success'){
          
          setResult(data.data)
          localStorage.setItem('fitnessData', JSON.stringify(data.data))

          navigate('/result')
          setLoading(()=>false)
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
      <MainFormContext.Provider value={{mainForm, handleSubmit, setMainForm, result, setResult, loading, setLoading}}>
        {children}
      </MainFormContext.Provider>
  ) 
}