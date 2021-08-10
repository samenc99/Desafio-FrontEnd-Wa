import {useHistory} from "react-router-dom";
import {HOME, PLAY, QUESTIONS} from "../Routes/routesConstants";

export default function useCoordinator(){
  const history = useHistory()

  const toHome = ()=> history.push(HOME)
  const toPlay = ()=> history.push(PLAY)
  const toQuestions = ()=> history.replace(QUESTIONS)

  return{
    toHome, toPlay, toQuestions
  }
}