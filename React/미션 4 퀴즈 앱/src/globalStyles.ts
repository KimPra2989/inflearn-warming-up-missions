import { css } from '@emotion/react'

export default css`
  @font-face {
    font-family: 'NanumMyeongjo';
    src: url('./fonts/NanumMyeongjo.woff') format('woff');
  }

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    background-color: #afcd8c;
  }

  li {
    list-style: none;
  }
`
