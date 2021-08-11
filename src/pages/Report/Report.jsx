import styled from "styled-components";
import {useEffect, useState} from "react";
import useCoordinator from "../../hooks/useCoordinator";

const Content = styled.div`
  display: flex;
  flex-direction: column;
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

  console.log(QAs)

  return(
    <div>Report</div>
  )
}