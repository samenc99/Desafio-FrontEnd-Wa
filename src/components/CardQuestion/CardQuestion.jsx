import {Alternative, Content, Letter, Text} from "./styled";
import {useEffect, useState} from "react";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function CardQuestion({question}){
  const [numberCorrect, setNumberCorrect] = useState();
  const [render, setRender] = useState([]);
  const LENGTH_INCORRECTS = question.incorrect_answers.length

  const randomAnswer = ()=>{

    const answers = {}
    let random = getRandomIntInclusive(0,LENGTH_INCORRECTS)
    if(random>LENGTH_INCORRECTS || random<0)random=0
    for(let i =0; i<LENGTH_INCORRECTS+1; i++){
      if(random>0){
        answers[i] = question.incorrect_answers[random-1]
      }
      else{
        answers[i] = question.correct_answer
        answers.correct = i
      }
      if(random===LENGTH_INCORRECTS)random=0
      else random+=1
    }
    return answers
  }
  const renderAnswer = ()=>{
    const answers = randomAnswer()
    const render = []
    for(let i=0; i<LENGTH_INCORRECTS+1; i++){
      render.push(
        <Alternative key={i}>
          <Letter>{i}</Letter>
          <p>{answers[i]}</p>
        </Alternative>
      )
    }
    return {render, correct: answers.correct}
  }

  useEffect(()=>{
    const r = renderAnswer()
    setRender(r.render)
    setNumberCorrect(r.correct)
  },[question])

  return (
    <Content>
      <Text>{question.question}</Text>
      {render}
    </Content>
  )
}