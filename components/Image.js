import { chakra } from '@chakra-ui/react'
import NextImage from 'next/image'

const Image = chakra(NextImage, {
  baseStyle: { },
  shouldForwardProp: (prop) =>
    [
      'width',
      'height',
      'src',
      'alt',
      'quality',
      'placeholder',
      'blurDataURL',
      'loader ',
      'layout'
    ].includes(prop)
})

export default Image
