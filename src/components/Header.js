import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <h1>Emotion Diary</h1>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 800px;
  height: 80px;

  h1 {
    color: #333;
    font-size: 40px;
    font-family: 'Fira Sans', sans-serif;
  }
`