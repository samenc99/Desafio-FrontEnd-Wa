import {useHistory} from "react-router-dom";
import {HOME, PLAY, QUESTIONS, REPORT} from "../Routes/routesConstants";

export default function useCoordinator(){
  const history = useHistory()

  const toHome = ()=> history.push(HOME)
  const toPlay = ()=> history.push(PLAY)
  const toQuestions = ()=> history.replace(QUESTIONS)
  const toReport = ()=>history.replace(REPORT)

  return{
    toHome, toPlay, toQuestions, toReport
  }
}