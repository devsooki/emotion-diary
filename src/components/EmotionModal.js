import React from 'react'
import styled from 'styled-components'

const EmotionModal = ({emotionArray}) => {
  return (
    <Container>
      {emotionArray}
    </Container>
  )
}

export default EmotionModal

const Container = styled.div`
  position: absolute;
  top: 10px; left: 10px;
`