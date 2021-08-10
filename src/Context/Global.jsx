import {createContext, useState} from "react";

export const Context = createContext()

export default function Global({children}){
  const [amount, setAmount] = useState(0);
  return(
    <Context.Provider value={{amount,setAmount}}>
      {children}
    </Context.Provider>
  )
}