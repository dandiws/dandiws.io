import { Box } from '@chakra-ui/core'

const Blockquote = (props) => (
  <Box
    borderLeftWidth="5px"
    borderLeftColor="accent"
    bg="dark.100"
    py={3}
    px={5}
    as="blockquote"
    {...props}
  />
)

export default Blockquote
