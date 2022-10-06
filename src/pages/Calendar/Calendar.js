import React, { useState } from 'react';
import styled from 'styled-components';
import { getFirstDate, getLastDate } from '../../utils/date';
import CalendarDay from './CalendarDay';
import CalendarWeek from './CalendarWeek';
import MonthSelector from './MonthSelector';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [isCurrentMonth, setIsCurrentMonth] = useState(true)
  const firstDay = getFirstDate(date).getDay();
  const lastDate = getLastDate(date).getDate();

  // 해당 달이 총 몇주까지 있는지 -> 배열 갯수 이 숫자로 만들기
  const lastWeekNo = Math.ceil((firstDay + lastDate) / 7)

  const calendarMatrix = Array.from(Array(lastWeekNo), () => new Array(7).fill(0));

  let colIdx = firstDay;
  let rowIdx = 0;

  for (let i = 1; i <= lastDate; i++) {
    calendarMatrix[rowIdx][colIdx] = i;

    colIdx++;

    if (colIdx > 6) {
      colIdx = 0;
      rowIdx++ 
    }
  }

  console.log('dd',date)
  return (
    <Container>
      <MonthSelector 
        date={date}
        setDate={setDate}
        setIsCurrentMonth={setIsCurrentMonth}
      />
      <Content>
        <CalendarWeek />
        <CalendarDay 
          calendarMatrix={calendarMatrix} 
          date={date}
          isCurrentMonth={isCurrentMonth}
        />
      </Content>
    </Container>
  );
};

export default Calendar;

const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  width: 800px;
  background-color: #fff8f9;
`
const Content = styled.div`

border: 1px solid #ddd;
`