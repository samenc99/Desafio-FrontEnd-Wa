import {useContext} from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from "../../styled-components/Container";
import styled from "styled-components";
import {Context} from "../../Context/Global";
import useCoordinator from "../../hooks/useCoordinator";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: '5px',
      minWidth: '320px',
    }
  },
}));

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export default function Home(){
  const {amount, setAmount} = useContext(Context)
  const {toPlay} = useCoordinator()
  const onChangeAmount = (e)=>{
    const {value} = e.target
    if(value>0)setAmount(value)
  }

  const onSubmitForm = (e)=>{
    e.preventDefault()
    if(amount<=0){
      alert('Please, you need to answer at least one question')
    }
    toPlay()
  }

  const classes = useStyles();
  return (
    <Container>
      <Form className={classes.root} autoComplete={'off'}>
        <label>Type the number of questions to be answered</label>
        <TextField
          required
          type={'number'}
          value={amount}
          name={'amount'}
          onChange={onChangeAmount}
          variant={'filled'}
          label={'Amount'}
        />
        <Button variant="contained" color="primary" onClick={onSubmitForm}>OK</Button>
      </Form>
    </Container>
  )

}