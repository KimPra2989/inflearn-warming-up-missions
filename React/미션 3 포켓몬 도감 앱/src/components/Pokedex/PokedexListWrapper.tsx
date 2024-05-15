import { css } from '@emotion/react'
import { ReactNode, forwardRef } from 'react'

interface PokedexListWrapperProps {
  children: ReactNode
}
const wrpperStyle = css`
  width: 500px;
  height: 100%;
  user-select: none;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 12px;
    z-index: 10;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
    box-shadow: inset 0 0 10px #777;
    border-radius: 4px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff8f8f;
  }
`

const PokedexListWrapper = forwardRef<HTMLOListElement, PokedexListWrapperProps>(
  ({ children }, ref) => {
    return (
      <ol css={wrpperStyle} ref={ref}>
        {children}
      </ol>
    )
  },
)

export default PokedexListWrapper
