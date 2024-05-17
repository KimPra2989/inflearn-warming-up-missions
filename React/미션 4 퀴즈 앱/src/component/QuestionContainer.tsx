import styled from '@emotion/styled'
import { ReactNode } from 'react'

interface QuestionContainerProps {
  children: ReactNode
}
function QuestionContainer({ children }: QuestionContainerProps) {
  const Container = styled.section`
    font-family: 'NanumMyeongjo';
    background-color: #f2f2f2;
    border-radius: 5px;
    padding: 20px;
    width: 40%;
    min-width: 550px;
    position: relative;
  `
  return <Container>{children}</Container>
}

export default QuestionContainer
