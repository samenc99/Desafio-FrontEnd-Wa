import {Alternative, Content, Letter, Text} from "./styled";
import {useEffect, useState} from "react";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function CardQuestion({question, next}){
  const [answers, setAnswers] = useState();
  const LENGTH_INCORRECT = question.incorrect_answers.length

  const randomAnswer = ()=>{
    const newAnswers = {}
    let random = getRandomIntInclusive(0,LENGTH_INCORRECT)
    if(random>LENGTH_INCORRECT || random<0)random=0
    for(let i =0; i<LENGTH_INCORRECT+1; i++){
      if(random>0){
        newAnswers[i] = question.incorrect_answers[random-1]
      }
      else{
        newAnswers[i] = question.correct_answer
        newAnswers.correct = i
      }
      if(random===LENGTH_INCORRECT)random=0
      else random+=1
    }
    setAnswers(newAnswers)
  }
  const renderAnswer = ()=>{
    if(!answers)return <></>
    const render = []
    for(let i=0; i<LENGTH_INCORRECT+1; i++){
      render.push(
        <Alternative key={i+1} onClick={()=>onClickAlternative(i)}>
          <Letter>{i+1}</Letter>
          <p>{answers[i]}</p>
        </Alternative>
      )
    }
    return render
  }

  const onClickAlternative = (i)=>{
    let QAs = JSON.parse(window.localStorage.getItem('QAs'))
    if(!Array.isArray(QAs))QAs = []
    const answersQA = []
    for(let i =0; i<LENGTH_INCORRECT+1; i++){
      answersQA.push(answers[i])
    }

    const QA = {
      question: question.question,
      answersQA,
      correct : answers.correct,
      user: i
    }
    QAs.push(QA)
    window.localStorage.setItem('QAs', JSON.stringify(QAs))
    next()
  }

  useEffect(()=>{
    randomAnswer()
  },[question])

  return (
    <Content>
      <Text>{question.question}</Text>
      {renderAnswer()}
    </Content>
  )
}