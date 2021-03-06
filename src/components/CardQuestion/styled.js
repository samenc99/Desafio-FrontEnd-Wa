import styled from "styled-components";

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  min-width: 350px;
  min-height: 300px;
  max-height: 350px;
`

export const Text = styled.p`
  width: 100%;
  text-align: justify;
  padding: 50px 20px;
  border: 1px solid #eee;
`

export const Alternative = styled.div`
  width: 100%;
  height: 40px;
  background-color: #F8F9FA;
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 500ms;
  :hover {
    background-color: #e8e8e8;
  }
`

export const Letter = styled.p`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  border: 1px solid #eee;
  background-color: #e8e8e8;
  
`