import { css, keyframes } from '@emotion/react'
import Flex from './Flex'

function Loading({ size = 200 }: { size?: number }) {
    const containerStyle = css`
        width: 100%;
        height: 100%;
    `
  const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
  const animation = css`
    animation: ${spin} 1s linear infinite;
  `
  return (
    <Flex css={containerStyle}>
      <img src="../src/assets/pokeball.png" alt="loading..." width={size} css={animation} />
    </Flex>
  )
}

export default Loading
