import React from 'react'
import styled from 'styled-components'

const EmotionModal = ({emotionArray}) => {
  return (
    <Container>
      {
        emotionArray.map((emotion, idx) => (
          <EmotionContent key={idx}>{emotion}</EmotionContent>
        ))
      }
    </Container>
  )
}

export default EmotionModal

const Container = styled.div`
  position: absolute;
  top: 10px; left: 10px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 150px;
  background-color: #fff;
  border-radius: 20px;
  z-index: 999;
`
const EmotionContent = styled.div`
  font-size: 20px;
  cursor: pointer;
`