import CardQuestion from "../CardQuestion/CardQuestion";
import {useEffect, useState} from "react";
import IconCategory from "../Icons/IconCategory";
import Container from "../../styled-components/Container";
import styled from "styled-components";
import useCoordinator from "../../hooks/useCoordinator";

const ContainerIcons = styled.section`
  article{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
  width: 100%;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export default function RenderQuestions({questions}){
  const [numberQuestion, setNumberQuestion] = useState(0);
  const {toReport} = useCoordinator()
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

  const onClickNext = ()=>{
    const newNumberQuestion = numberQuestion+1
    if(newNumberQuestion>=questions.length)toReport()
    setNumberQuestion(newNumberQuestion)
  }

  useEffect(()=>{
    window.localStorage.removeItem('QAs')
  },[])

  return (
    <Container>
      <Content>
        {renderIcons()}
        <CardQuestion question={questions[numberQuestion]} next={onClickNext}/>
      </Content>
    </Container>
  )
}