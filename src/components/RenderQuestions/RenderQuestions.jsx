import CardQuestion from "../CardQuestion/CardQuestions";
import {useEffect, useState} from "react";
import IconCategory from "../Icons/IconCategory";
import Container from "../../styled-components/Container";
import styled from "styled-components";

const ContainerIcons = styled.section`
  article{
    display: flex;
  }
`

export default function RenderQuestions({questions}){
  const [numberQuestion, setNumberQuestion] = useState(0);

  const renderIcons = ()=>{
    return(
     <ContainerIcons>
       <article>
         <IconCategory category={questions[numberQuestion].category} name={'celebrities'}/>
         <IconCategory category={questions[numberQuestion].category} name={'entertainment'}/>
         <IconCategory category={questions[numberQuestion].category} name={'geography'}/>
         <IconCategory category={questions[numberQuestion].category} name={'science'}/>
         <IconCategory category={questions[numberQuestion].category} name={'sports'}/>
         <IconCategory category={questions[numberQuestion].category} name={'default'}/>
       </article>
     </ContainerIcons>
    )
  }

  return (
    <Container>
      {renderIcons()}
      <button onClick={()=>setNumberQuestion(numberQuestion+1)}>Cli</button>
    </Container>
  )
}