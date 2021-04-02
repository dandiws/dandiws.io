import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box } from '@chakra-ui/layout'

const Blockquote = (props) => {
  const bg = useColorModeValue('gray.100', 'dark.100')
  return (
    <Box
      bg={bg}
      borderLeftWidth="5px"
      borderLeftColor="accent"
      py={3}
      px={5}
      as="blockquote"
      {...props}
    />
  )
}

export default Blockquote
