import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Link,
  useColorMode,
} from '@chakra-ui/core'
import Sun from './icons/Sun'
import Moon from './icons/Moon'
import Hamburger from './icons/Hamburger'
import Close from './icons/Close'
import { useState } from 'react'

const Menu = ({ show }) => {
  const { colorMode } = useColorMode()

  return (
    <Flex
      as="nav"
      pos={['fixed', 'relative']}
      top={[0, 'auto']}
      left={[0, 'auto']}
      w={['full', 'auto']}
      h={['100vh', 'auto']}
      bg={[colorMode == 'light' ? 'gray.100' : 'gray.800', 'transparent']}
      direction={['column', 'row']}
      justify="center"
      align="center"
      transform={[show ? 'translateX(0)' : 'translateX(100%)', 'translateX(0)']}
      zIndex={10}
      transition="transform .2s ease-out"
      fontSize={['xl', 'md']}
    >
      <NextLink href="/blog">
        <Link py={5} px={2} mx={2}>
          Blog
        </Link>
      </NextLink>
      <NextLink href="/blog">
        <Link py={5} px={2} mx={2}>
          About
        </Link>
      </NextLink>
      <NextLink href="/blog">
        <Link py={5} px={2} mx={2}>
          Contact
        </Link>
      </NextLink>
    </Flex>
  )
}

const Navbar = () => {
  const [menuHidden, setMenuHidden] = useState(true)
  const { colorMode, toggleColorMode } = useColorMode()
  const toggleMenu = () => {
    setMenuHidden((current) => !current)
  }

  return (
    <Container maxW="md" py="6">
      <Flex align="center" justify="space-between">
        <Box>
          <NextLink href="/">
            <strong>DW</strong>
          </NextLink>
        </Box>
        <Flex align="center" color="gray.500">
          <Menu show={!menuHidden} />
          <Flex>
            <IconButton
              variant="unstyled"
              icon={colorMode == 'dark' ? <Sun /> : <Moon />}
              onClick={toggleColorMode}
            />
            <IconButton
              d={['block', 'none']}
              variant="unstyled"
              icon={menuHidden ? <Hamburger /> : <Close />}
              onClick={toggleMenu}
              zIndex={10}
            />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Navbar
