import styled from '@emotion/styled'
import { CSSProperties } from 'react'

interface BadgeProps {
  label: string
  backgroundColor: CSSProperties['backgroundColor']
  color?: CSSProperties['color']
}

function Badge({ label, backgroundColor, color = 'white' }: BadgeProps) {
  return (
    <Container backgroundColor={backgroundColor} color={color}>
      {label}
    </Container>
  )
}

const Container = styled.span<Pick<BadgeProps, 'backgroundColor' | 'color'>>`
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
  color: ${({ color }) => color};
  border: none;
  padding: 3px 12px;
  text-align: center;
  font-weight: normal;
  font-size: 16px;
`

export default Badge
