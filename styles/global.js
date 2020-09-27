import { css } from '@emotion/core'
import prism from './prism'

const globalStyle = css`
  ${prism}

  code {
    color: rgba(255, 121, 198, 1);
    font-family: PT Mono, Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono';
    padding: 0 0.4em;
    background-color: rgb(40, 41, 54);
    border-radius: 0.2em;
  }
`

export default globalStyle
