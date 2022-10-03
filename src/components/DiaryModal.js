import React from 'react';
import styled from 'styled-components';

const DiaryModal = ({ onClickCalendarDate }) => {
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

          />
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
  padding: 30px 20px;
`
const TextArea = styled.textarea`
  padding: 20px;
  width: 100%;
  height: 100%;
  border: 1px solid #eee;
  border-radius: 10px;
  resize: none;
`