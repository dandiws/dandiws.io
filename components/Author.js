import Github from './icons/Github'
import Linkedin from './icons/Linkedin'
import Instagram from './icons/Instagram'
import Mail from './icons/Mail'
import { Flex, Box, Heading, Link, Text } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/avatar'
import { IconButton } from '@chakra-ui/button'
import { useColorModeValue } from '@chakra-ui/color-mode'

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
    <Flex>
      <Link href="https://github.com/dandiws" ml={3} isExternal>
        <IconButton as="span" icon={<Github />} />
      </Link>
      <Link
        href="https://id.linkedin.com/in/dandi-wiratsangka-5300a9132"
        ml={3}
        isExternal
      >
        <IconButton as="span" icon={<Linkedin />} />
      </Link>
      <Link href="https://instagram.com/dandiws" ml={3} isExternal>
        <IconButton as="span" icon={<Instagram />} />
      </Link>
      <Link href="mailto:dandiwiratsangka@gmail.com" ml={3} isExternal>
        <IconButton as="span" icon={<Mail />} />
      </Link>
    </Flex>
  </Flex>
)

export default Author
