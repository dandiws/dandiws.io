import NextLink from 'next/link'
import Sun from './icons/Sun'
import Moon from './icons/Moon'
import Hamburger from './icons/Hamburger'
import Close from './icons/Close'
import { useState, useEffect } from 'react'
import DwLogo from './icons/DwLogo'
import Container from './Container'
import NavMenu from './NavMenu'
import { useRouter } from 'next/router'
import { Box, Flex, Link } from '@chakra-ui/layout'
import { useColorModeValue, useColorMode } from '@chakra-ui/color-mode'
import { IconButton } from '@chakra-ui/button'

const Navbar = () => {
  const [menuHidden, setMenuHidden] = useState(true)
  const { colorMode, toggleColorMode } = useColorMode()
  const navbarBg = useColorModeValue('white', 'dark.200')
  const router = useRouter()

  useEffect(() => {
    setMenuHidden(true)
  }, [router.asPath])

  const toggleMenu = () => {
    setMenuHidden((current) => !current)
  }

  return (
    <Box bg={navbarBg} py={4}>
      <Container>
        <Flex align="center" justify="space-between">
          <Box>
            <NextLink href="/">
              <Link>
                <DwLogo
                  transition="transform .2s ease-out"
                  _hover={{
                    transform: 'rotate(90deg)'
                  }}
                  boxSize={12}
                />
              </Link>
            </NextLink>
          </Box>
          <Flex align="center" color="gray.500">
            <NavMenu mr={6} bg={navbarBg} show={!menuHidden} />
            <Flex>
              <IconButton
                variant="unstyled"
                icon={colorMode === 'dark' ? <Sun /> : <Moon />}
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
    </Box>
  )
}

export default Navbar
