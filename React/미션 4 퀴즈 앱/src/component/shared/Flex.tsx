import styled from '@emotion/styled'
import { CSSProperties } from 'react'
;``
interface FlexProps {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
  gap?: CSSProperties['gap']
}

const Flex = styled.div<FlexProps>(
  ({ align = 'center', justify = 'center', direction = 'column', gap = 0 }) => ({
    display: 'flex',
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    gap,
  }),
)

export default Flex
