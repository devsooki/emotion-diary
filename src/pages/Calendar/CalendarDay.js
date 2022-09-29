import React from 'react';
import styled from 'styled-components';

const CalendarDay = ({calendarMatrix, date}) => {
  console.log(date.getDate())
  let todayDate = date.getDate()
  const createCell = (cell, idx) => {
    if (cell === 0) {

    return <CalendarCell key={idx} className='empty'></CalendarCell>
    }
    return (
      <CalendarCell key={idx} className={cell === todayDate && 'today'}>
        <span>{cell}</span>
      </CalendarCell>
    )
  };

  const creatRow = (row, idx) => {
    const tds = row.map(createCell);

    return <CalendarRow key={idx}>{tds}</CalendarRow>;
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
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`
const CalendarCell = styled.div`
  flex: 1;
  padding: 10px;
  height: 80px;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }

  &.empty {
    background-color: #fcf2f6;
  }
  &.today span {
    padding: 5px;
    color: #fff;
    border-radius: 50%;
    background-color: #fc9fc4;
  }
`