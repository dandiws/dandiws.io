/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/display-name */
import Blockquote from './Blockquote'
import ExternalLink from './ExternalLink'
import Author from './Author'
import Image from 'next/image'
import { Code } from 'bright'

Code.theme = {
  light: 'material-lighter',
  dark: 'github-dark-dimmed'
}

const mdxcomponents = {
  blockquote: (props) => <Blockquote mb={6} {...props} />,
  a: ExternalLink,
  Image,
  Author,
  pre: Code
}

export default mdxcomponents
