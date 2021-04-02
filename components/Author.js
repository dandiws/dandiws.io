import { Flex, Box, Heading, Text } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/avatar'
import { useColorModeValue } from '@chakra-ui/color-mode'
import SocialButtons from './SocialButtons'

const BorderedAvatar = () => {
  const bg = useColorModeValue('white', 'dark.200')
  return (
    <Box
      bgGradient="linear(to-l, #7928CA, accent)"
      padding="2px"
      width="auto"
      height="auto"
      borderRadius="50%"
      mb={[8, 8, 0]}
    >
      <Avatar
        size="lg"
        name="Dandi Wiratsangka S"
        src="/images/avatar.jpg"
        bg={bg}
        borderColor={bg}
        borderWidth={2}
      />
    </Box>
  )
}
const Author = () => (
  <Flex
    align="center"
    justify="space-between"
    direction={['column', 'column', 'row']}
  >
    <Flex direction={['column', 'column', 'row']} align="center" mb={[8, 8, 0]}>
      <BorderedAvatar />
      <Flex
        ml={6}
        textAlign={['center', 'center', 'left']}
        justifyContent={['center', 'center', 'flex-start']}
        flexDirection="column"
      >
        <Heading as="h2" size="md" mb={1}>
          Dandi Wiratsangka S
        </Heading>
        <Text color="gray.500">Software Engineer</Text>
      </Flex>
    </Flex>
    <SocialButtons />
  </Flex>
)

export default Author
