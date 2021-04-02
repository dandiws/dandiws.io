import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      bg: mode('white', 'dark.200')(props)
    },

    '*::selection': {
      bg: 'accent'
    },
    '*::-moz-selection': {
      bg: 'red.600'
    },
    'code:not([class*=language-])': {
      color: 'red.400',
      px: 1,
      bg: mode('gray.100', 'dark.100')(props),
      border: '1px solid',
      borderColor: mode('gray.200', 'gray.800')(props),
      borderRadius: 'sm',
      fontFamily: 'Fira Code, monospace',
      fontSize: 'sm'
    },
    blockquote: {
      p: {
        marginBottom: '0 !important'
      }
    }
  })
}

export default styles
