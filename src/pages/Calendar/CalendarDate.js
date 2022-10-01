import React from 'react';
import styled from 'styled-components';

const CalendarDate = ({todayDate, cell, isCurrentMonth}) => {

  if (cell === 0) {
    return <CalendarCell className='empty'></CalendarCell>
  }
  return (
    <CalendarCell className={isCurrentMonth && cell === todayDate && 'today'}>
      <span>{cell}</span>
    </CalendarCell>
  )
};

export default CalendarDate;
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
    display: inline-block;
    width: 20px;
    height: 20px;
    color: #fff;
    text-align: center;
    border-radius: 50%;
    background-color: #fc9fc4;
  }
`