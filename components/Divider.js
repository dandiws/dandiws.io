import { Box } from '@chakra-ui/layout'

const Divider = ({ divider = '/', ...props }) => (
  <Box
    {...props}
    _before={{
      content: `'${divider}'`
    }}
  />
)

export default Divider
