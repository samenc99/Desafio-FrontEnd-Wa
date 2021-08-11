import styled from "styled-components";
import {Alternative, Content, Letter, Text} from "../CardQuestion/styled";

export const MyAlternative = styled(Alternative)`
  background-color: ${props=>props.user? '#f00':''};
  background-color: ${props=>props.correct? '#0f0':''};
  :hover{
    background-color: ${props=>props.user? '#f00':''};
    background-color: ${props=>props.correct? '#0f0':''};
  }
  cursor: default;
`

const P = styled.p`
  color: ${props=>props.correct? '#0f0':'#f00'};
  margin-bottom: 10px;
`

export default function CardQuestionSolved({qa}){

  const renderAnswers = ()=>{
    return qa.answersQA.map((answer, index)=>{
      return(
        <MyAlternative key={index+1} user={qa.user===index} correct={qa.correct===index}>
          <Letter>{index+1}</Letter>
          <p>{answer}</p>
        </MyAlternative>
      )
    })
  }

  return(
    <Content>
      <Text>{qa.question}</Text>
      {renderAnswers()}
      {
        qa.user === qa.correct ? (
          <P correct={true}>You're right</P>
        ):(
          <P correct={false}>You got the answer wrong</P>
        )
      }
    </Content>
  )
}