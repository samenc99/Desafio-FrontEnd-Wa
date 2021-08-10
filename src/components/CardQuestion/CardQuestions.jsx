import styled from "styled-components";
import IconCategory from "../Icons/IconCategory";

const Img = styled.img`
  width: 50px;
  height: 50px;
  background-color: rgba(0,0,0,0.1);
`

export default function CardQuestion({question}){
  return <div>
    {<IconCategory category={'question'} name={'question'}/>}
  </div>
}