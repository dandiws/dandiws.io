import { extendTheme } from '@chakra-ui/react'
import colors from './colors'
import styles from './styles.js'
import textStyles from './textStyles'
import fonts from './fonts'

const overrides = {
  colors,
  styles,
  textStyles,
  fonts
}

export default extendTheme(overrides)
