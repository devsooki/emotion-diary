import React, { useState } from 'react';
import styled from 'styled-components';
import { getFirstDate, getLastDate } from '../../utils/date';
import CalendarWeek from './CalendarWeek';
import MonthSelector from './MonthSelector';

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const calendarMatrix = Array.from(Array(6), () => new Array(7));

  //const calendarMatrix = Array.from(Array(6), () => Array(7).fill(0));
  const firstDay = getFirstDate(date).getDay();
  const lastDate = getLastDate(date).getDate();


  console.log(calendarMatrix)

  return (
    <Container>
      <MonthSelector 
        date={date}
        setDate={setDate}
      />
      <CalendarWeek />
      
    </Container>
  );
};

export default Calendar;

const Container = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  width: 800px;
  background-color: #fff8f9;
`
