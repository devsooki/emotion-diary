import EmotionModal from 'components/EmotionModal';
import React, { useState } from 'react';
import styled from 'styled-components';

const CalendarDate = ({todayDate, cell, isCurrentMonth}) => {

  const EMOTION_ARRAY = ['😁', '😭', '🥰', '😡', '😷']
  const [isEmotionModal, setIsEmotionModal] = useState(false)

  const onClickCalendarDate = () => {
    setIsEmotionModal(!isEmotionModal)
  }

  if (cell === 0) {
    return <CalendarCell className='empty'></CalendarCell>
  }
  return (
    <CalendarCell 
        onClick={onClickCalendarDate}
        className={isCurrentMonth && cell === todayDate && 'today'}
      >
        <span>{cell}</span>

        {
          isEmotionModal && (
            <EmotionModal
              emotionArray={EMOTION_ARRAY}
            />
          )
        }
      </CalendarCell>
  )
};

export default CalendarDate;

const CalendarCell = styled.div`
  position: relative;
  flex: 1;
  padding: 10px;
  height: 80px;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }
  &:hover {
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