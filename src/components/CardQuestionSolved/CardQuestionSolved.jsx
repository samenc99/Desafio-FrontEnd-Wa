import styled from "styled-components";
import {Alternative, Content, Letter, Text} from "../CardQuestion/styled";

export const MyAlternative = styled(Alternative)`
  background-color: ${props=>props.user? '#f00':'initial'};
  background-color: ${props=>props.correct? '#0f0':'initial'};
`

//   <Alternative key={i+1} onClick={()=>onClickAlternative(i)}>
// <Letter>{i+1}</Letter>
// <p>{answers[i]}</p>
// </Alternative>

export default function CardQuestionSolved({qa}){

  const renderAnswers = ()=>{

  }

  return(
    <Content>
      <Text>{qa.question}</Text>
    </Content>
  )
}