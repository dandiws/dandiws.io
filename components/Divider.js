import { Box } from '@chakra-ui/core'

const Divider = ({ divider = '/', ...props }) => (
  <Box
    {...props}
    _before={{
      content: `'${divider}'`,
    }}
  />
)

export default Divider
