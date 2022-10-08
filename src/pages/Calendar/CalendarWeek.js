import React from 'react';

// style
import styled from 'styled-components';

const CalendarWeek = () => {

  const DAY = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <Container>
      {DAY.map((day, i) => (
        <WeekContent key={i}>
          {day}
        </WeekContent>
      ))}
    </Container>
  );
};

export default CalendarWeek;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #ddd;
`
const WeekContent = styled.div`
  flex: 1;
  height: 100%;
  text-align: center;
  line-height: 50px;
  border-right: 1px solid #ddd;

  &:nth-child(1) {
    color: #cc0000;
  }
  &:nth-child(6) {
    color: #1070ba;
  }
  &:last-child {
    border-right: none;
  }
`