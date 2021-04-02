import Container from './Container'
import NextLink from 'next/link'
import Divider from './Divider'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box, Flex, Link, Text } from '@chakra-ui/layout'

const Footer = () => {
  const linkColor = useColorModeValue('gray.700', 'gray.400')
  return (
    <Box py={16} textStyle="gray:sm">
      <Container>
        <Flex justify="center" alignItems="center">
          <Text>&copy; 2020</Text>
          <Divider mx={4} color="gray.700" />
          <Link
            color={linkColor}
            _hover={{ color: 'gray.300' }}
            href="https://github.com/dandiws/dandiws.io"
            title="Github Repository"
            isExternal
          >
            Github
          </Link>
          <Divider mx={4} color="gray.700" />
          <NextLink href="/privacy">
            <Link color={linkColor} _hover={{ color: 'gray.300' }}>
              Privacy Policy
            </Link>
          </NextLink>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
