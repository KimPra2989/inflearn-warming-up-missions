import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ReactNode } from 'react'

interface TextLabelProps {
  title: string
  content: ReactNode
}

function TextLabel({ title, content }: TextLabelProps) {
  const conainerStyle = css`
    line-height: 0.9;
    margin-bottom: 22px;
  `
  const titleStyle = css`
    margin-bottom: 10px;
  `
  const Content = styled.span`
    font-weight: bold;
    font-size: 32px;
  `
  return (
    <div css={conainerStyle}>
      <h3 css={titleStyle}>{title}</h3>
      <Content>{content}</Content>
    </div>
  )
}

export default TextLabel
