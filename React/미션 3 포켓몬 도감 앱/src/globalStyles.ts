import { css } from '@emotion/react'

export default css`
  #root {
    width: 100%;
    height: 100%;
  }
  body,
  div,
  ol,
  li {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  h1,
  h3 {
    font-weight: inherit;
    margin: 0;
  }
  body {
    box-sizing: border-box;
    border: 30px #e12f2e solid;
    height: 100vh;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
  ol {
    list-style: none;
  }
  img {
    display: block;
  }
`
