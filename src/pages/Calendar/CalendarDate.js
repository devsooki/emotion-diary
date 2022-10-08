import React, { useEffect, useRef, useState } from 'react';

// components
import DiaryModal from 'components/DiaryModal';

// utils
import { createDateKey } from 'utils/date';
import { loadLocalStorage } from 'utils/localstorage';

// styke
import styled from 'styled-components';

const CalendarDate = ({...props}) => {
  const cellEl = useRef();
  const {
    todayDate, 
    cell, 
    date, 
    isCurrentMonth
  } = props

  const [isDiary, setIsDiary] = useState(false)
  const [isDiaryModal, setIsDiaryModal] = useState(false)

  useEffect(() => {
    if (loadLocalStorage('emotionDiary') !== null) {
      let data = loadLocalStorage('emotionDiary')[createDateKey(date, cell)]

      if (data !== undefined) {
        setIsDiary(true)
      }
    }
  }, [])


  const onClickCalendarDate = () => {
    setIsDiaryModal(!isDiaryModal)
  }

  if (cell === 0) {
    return <CalendarCell className='empty'></CalendarCell>
  }
  return (
    <>
      <CalendarCell 
        onClick={onClickCalendarDate}
        ref={cellEl}
      >
        <Cell
          className={isCurrentMonth && cell === todayDate && 'today'}
        >
          {cell}
        </Cell>
        {isDiary && <DiaryData>📝</DiaryData>}
      </CalendarCell>

      {
        isDiaryModal && (
          <DiaryModal
            date={date}
            cell={cell}
            isDiaryModal={isDiaryModal}
            setIsDiaryModal={setIsDiaryModal}
            onClickCalendarDate={onClickCalendarDate}
          />
        )
      }
    </>
  )
};

export default CalendarDate;

const CalendarCell = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px;
  height: 80px;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
  &:hover {
    cursor: pointer;
    background-color: #ffe0ed;
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
const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  font-size: 12px;

  &.today {
    color: #fff;
    border-radius: 50%;
    background-color: #fc9fc4;
  }
`
const DiaryData = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`