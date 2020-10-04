import { extendTheme } from '@chakra-ui/core'
import colors from './colors'
import styles from './styles.js'
import textStyles from './textStyles'

const overrides = {
  colors,
  styles,
  textStyles,
}

export default extendTheme(overrides)
