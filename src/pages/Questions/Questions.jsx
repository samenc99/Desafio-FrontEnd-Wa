import {useContext, useEffect, useState} from "react";
import {Context} from "../../Context/Global";
import useCoordinator from "../../hooks/useCoordinator";
import QuestionsController from "../../controller/QuestionsController";

const questionsController = new QuestionsController()

export default function Questions(){
  const {amount} = useContext(Context)
  const {toHome} = useCoordinator()
  const [questions, setQuestions] = useState()
  const [numberQuestion, setNumberQuestion] = useState(0)

  useEffect(()=>{
    if(amount<1){
      toHome()
    }
    get()
  },[])

  const get = async()=>{
    try{
      const results = await questionsController.get(amount)
      if(results.length<1){
        throw new Error('Amount must be greater than 0')
      }
      setQuestions(results)
    }catch (err){
      alert(err.message)
      toHome()
    }
  }
  
  return(
    <div>Questions</div>
  )
}