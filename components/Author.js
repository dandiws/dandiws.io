import Github from './icons/Github'
import Linkedin from './icons/Linkedin'
import Instagram from './icons/Instagram'
import Mail from './icons/Mail'
import { Flex, Box, Heading, Link, Text } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/avatar'
import { IconButton } from '@chakra-ui/button'

const Author = () => (
  <Flex
    align="center"
    justify="space-between"
    direction={['column', 'column', 'row']}
  >
    <Flex direction={['column', 'column', 'row']} align="center" mb={[8, 8, 0]}>
      <Avatar
        mb={[8, 8, 0]}
        size="lg"
        name="Dandi Wiratsangka S"
        src="/images/avatar.jpg"
        bg="accent"
        borderWidth="3px"
        borderColor="accent"
      />
      <Box ml={6}>
        <Heading as="h2" size="md">
          Dandi Wiratsangka S
        </Heading>
        <Text color="gray.500">Software Engineer</Text>
      </Box>
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
