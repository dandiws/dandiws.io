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
import { useColorMode } from '@chakra-ui/color-mode'
import { IconButton } from '@chakra-ui/button'

const Navbar = () => {
  const [menuHidden, setMenuHidden] = useState(true)
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter()

  useEffect(() => {
    setMenuHidden(true)
  }, [router.asPath])

  const toggleMenu = () => {
    setMenuHidden((current) => !current)
  }

  return (
    <Box py={4}>
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
            <NavMenu mr={6} show={!menuHidden} />
            <Flex>
              <IconButton
                aria-label="Toggle theme"
                variant="unstyled"
                icon={colorMode === 'dark' ? <Sun /> : <Moon />}
                onClick={toggleColorMode}
                transition="none"
              />
              <IconButton
                aria-label={menuHidden ? 'Open navigation menu' : 'Close navigation menu'}
                d={['block', 'none']}
                variant="unstyled"
                icon={menuHidden ? <Hamburger /> : <Close />}
                onClick={toggleMenu}
                zIndex={10}
                transition="none"
              />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
