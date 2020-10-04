import { css } from '@chakra-ui/core'
import theme from '.'

const textStyles = css({
  postDetail: {
    color: 'accent',
    fontFamily: `Fira Code, monospace`,
    wordSpacing: '0px',
    fontSize: 'sm',
  },
  'gray:sm': {
    color: 'gray.500',
    fontSize: 'sm',
  },
})(theme)

export default textStyles
