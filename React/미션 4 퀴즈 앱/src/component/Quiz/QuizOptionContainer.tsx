import styled from '@emotion/styled'
import { ReactNode } from 'react'

interface QuizOptionContainerProps {
  children: ReactNode
}

function QuizOptionContainer({ children }: QuizOptionContainerProps) {
  const Container = styled.ul`
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 10px;
    line-height: 32px;
    user-select: none;
    padding-left: 16px;
  `
  return <Container>{children}</Container>
}

export default QuizOptionContainer
