import Container from "../../styled-components/Container";
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import useCoordinator from "../../hooks/useCoordinator";

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  min-width: 300px;
  >p{
    width: 100%;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
`

export default function (){
  const {toHome, toQuestions} = useCoordinator()

  return(
    <Container>
      <Content>
        <p>Are you ready to get started?</p>
        <Button variant={'contained'} color={'primary'} onClick={toQuestions}>START</Button>
        <Button variant={'contained'} color={'secondary'} onClick={toHome}>CANCEL</Button>
      </Content>
    </Container>
  )
}