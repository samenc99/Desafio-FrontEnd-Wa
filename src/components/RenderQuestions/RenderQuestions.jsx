import CardQuestion from "../CardQuestion/CardQuestion";
import {useEffect, useState} from "react";
import IconCategory from "../Icons/IconCategory";
import Container from "../../styled-components/Container";
import styled from "styled-components";

const ContainerIcons = styled.section`
  article{
    display: flex;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
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

  const onClickNext = ()=>{
    setNumberQuestion(numberQuestion+1)
  }

  useEffect(()=>{
    window.localStorage.removeItem('QAs')
  },[])

  return (
    <Container>
      <Content>
        {
          numberQuestion<questions.length?(
            <>
              {renderIcons()}
              <CardQuestion question={questions[numberQuestion]} next={onClickNext}/>
            </>
          ):(
            <></>
          )
        }
      </Content>
    </Container>
  )
}