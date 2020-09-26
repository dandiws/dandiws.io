import { Container, Divider, Flex, Link, Text } from '@chakra-ui/core'
import Github from './icons/Github'
import Linkedin from './icons/Linkedin'

const Footer = () => (
  <Container maxW="md" py={5} color="gray.500">
    <Flex justify="space-between">
      <Flex>
        <Text fontSize="sm">&copy; 2020</Text>
        <Divider mx={4} orientation="vertical" />
        <Text fontSize="sm">#StaySafe</Text>
      </Flex>
      <Flex>
        <Link href="https://github.com/dandiws" isExternal>
          <Github />
        </Link>
        <Divider mx={4} orientation="vertical" />
        <Link href="https://linkedin.com/dandiws" isExternal>
          <Linkedin />
        </Link>
      </Flex>
    </Flex>
  </Container>
)

export default Footer
