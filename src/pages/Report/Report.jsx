import styled from "styled-components";
import {useEffect, useState} from "react";
import useCoordinator from "../../hooks/useCoordinator";
import CardQuestionSolved from "../../components/CardQuestionSolved/CardQuestionSolved";
import Button from '@material-ui/core/Button';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const H1 = styled.h1`
  width: 100%;
  height: 100px;
  text-align: center;
  padding: 20px 0;
`

const MyButton = styled(Button)`
  margin-bottom: 20px;
  font-weight: bold;
`

export default function Report(){
  const [QAs, setQAs] = useState([]);
  const {toHome} = useCoordinator()

  useEffect(()=>{
    const newQAs = JSON.parse(window.localStorage.getItem('QAs'))
    if(!newQAs){
      alert('There is no report to show.')
      toHome()
    }
    setQAs(newQAs)
  },[])

  const renderQAs = ()=>{
    return QAs.map((qa,index)=>{
      return <CardQuestionSolved qa={qa} key={index}/>
    })
  }

  const QAsCorrects = ()=>{
    if(QAs.length===0)return <></>
    let numberCorrects = 0
    QAs.forEach(qa=>{
      if(qa.user===qa.correct)numberCorrects+=1
    })
    return <H1>You got {numberCorrects} questions right</H1>
  }

  return(
    <Content>
      {QAsCorrects()}
      <MyButton variant="contained" onClick={toHome}>Start again</MyButton>
      {renderQAs()}
    </Content>
  )
}