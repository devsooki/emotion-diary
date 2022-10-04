import React, { useState } from 'react';
import styled from 'styled-components';

const DiaryModal = ({ date, onClickCalendarDate }) => {
  const [diary, setDiary] = useState('')
  const onChangeDiary = e => {
    const {
      target: { value }
    } = e
    
    setDiary(value)
  }
  const onClickButton = () => {
    localStorage.setItem('emotionDiary', JSON.stringify({date: date, diary: diary}))
  }
  return (
    <Container>
      <ModalContainer>
        <Header>
          <h1>
            오늘 감사한 일은?
          </h1>
          <button
            onClick={onClickCalendarDate}
          >
            X
          </button>
        </Header>
        <Content>
          <TextArea
            value={diary}
            onChange={onChangeDiary}
          />
          <Button onClick={onClickButton}>등록</Button>
        </Content>
      </ModalContainer>
    </Container>
  )
}

export default DiaryModal

const Container = styled.div`
  position: fixed;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);

  z-index: 999;
`
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 500px;
  background-color: #fff;
  border-radius: 10px;
`
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #eee;

  h1 {
    font-size: 18px;
  }
  button {
    font-size: 15px;
    font-weight: bold;
    background: none;
  }
`
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
`
const TextArea = styled.textarea`
  flex: 1;
  padding: 20px;
  width: 100%;
  border: 1px solid #eee;
  //border-radius: 10px;
  resize: none;
`
const Button = styled.button`
  margin-top: 20px;
  height: 40px;
  color: #fff;
  background-color: #fc9fc4;
  //border-radius: 10px;
`