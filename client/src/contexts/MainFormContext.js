import React, {createContext, useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";

const MainFormContext = createContext()

export function useMainForm() {
  return useContext(MainFormContext)
}



export function MainFormProvider({children}){
  
  const {user} = useUser()

  const [mainForm, setMainForm] = useState({
    username: user,
    age : "YOUNGADULT",
    gender : "MALE",
    activity : "MEDIUM",
    height: 1.8,
    weight : 70,
    goal : "MUSCLE",
    schedule : "FLEXIBLE"
  })

  const [result, setResult] = useState({
    health: "GOOD",
    food: "INCREASE",
    training: "AVERAGE",
    program: [
        "PPL",
        "GVT",
        "FourDay_SPLIT"
    ],
    eat: [
        "Protein",
        "Complex_carbohydrates",
        "Healthy_fats"
    ],
    avoid: [
        "Processed_snacks",
        "Soda",
        "Fried_food"
    ],
    advice: [
        "Lift heavy, eat protein",
        "Prioritize protein and fiber"
    ],
    macros: {
        calories: 2753.4696000000004,
        protein: 147.0,
        fat: 91.78232000000001,
        carbs: 344.18370000000004,
        fibers: 35.0
    }
  })

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/result')
  }

  return (
      <MainFormContext.Provider value={{mainForm, handleSubmit, setMainForm, result}}>
        {children}
      </MainFormContext.Provider>
  ) 
}