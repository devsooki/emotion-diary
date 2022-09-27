import React from 'react';
import styled from 'styled-components';
import { getNextMonth, getPrevMonth } from '../../utils/date';


const DateSelector = ({date, setDate}) => {
  
  const dateFormat = () => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return `${year}년 ${month}월`;
  };

  const onClickPrevMonth = () => setDate(getPrevMonth(date))
  const onClickNextMonth = () => setDate(getNextMonth(date))

  return (
    <Container>
      <button onClick={onClickPrevMonth}>
        ◀
      </button>
      <b>{dateFormat(date)}</b>
      <button onClick={onClickNextMonth}>
        ▶︎
      </button>
    </Container>
  );
};

export default DateSelector;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  color: #333;

  b {
    margin: 0 10px;
    width: 120px;
    font-size: 20px;
    text-align: center;
  }
  button {
    width: 20px;
    height: 20px;
    background-color: rgba(0,0,0,0);
  }
`