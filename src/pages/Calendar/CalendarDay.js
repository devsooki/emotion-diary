import React from 'react';
import styled from 'styled-components';

const CalendarDay = ({calendarMatrix, month}) => {

  const createCell = (cell, idx) => {
    return <CalendarCell key={idx}>{cell}</CalendarCell>;
  };

  const creatRow = (row, idx) => {
    const tds = row.map(createCell);

    return <CalendarRow className='a' key={idx}>{tds}</CalendarRow>;
  };

  return (
    <DayContent>

      {calendarMatrix.map(creatRow)}
    </DayContent>
  );
};

export default CalendarDay;

const DayContent = styled.div`
  display: flex;
  flex-direction: column;
`
const CalendarRow = styled.div`
  display: flex;
`
const CalendarCell = styled.div`
  flex: 1;
  height: 50px;
`