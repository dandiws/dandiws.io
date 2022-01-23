import { useColorModeValue } from '@chakra-ui/color-mode'
import { Flex, Link } from '@chakra-ui/layout'

import NextLink from 'next/link'

const NavLink = ({ href, children, ...props }) => (
  <NextLink href={href}>
    <Link
      {...props}
      mx={5}
      my={[3, 0]}
      _hover={{
        textDecor: 'none',
        color: 'accent'
      }}
      transition="color 0.15s ease-out"
    >
      {children}
    </Link>
  </NextLink>
)

const NavMenu = ({ show, ...props }) => {
  const navlinkColor = useColorModeValue('dark.100', 'gray.300')
  return (
    <Flex
      {...props}
      as="nav"
      pos={['fixed', 'relative']}
      top={[0, 'auto']}
      left={[0, 'auto']}
      w={['full', 'auto']}
      h={['100vh', 'auto']}
      direction={['column', 'row']}
      justify="center"
      align="center"
      transform={[show ? 'translateX(0)' : 'translateX(100%)', 'translateX(0)']}
      zIndex={10}
      transition="transform .2s ease-out"
      fontSize={['xl', 'md']}
      color={navlinkColor}
    >
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/resume.pdf">Resume</NavLink>
    </Flex>
  )
}

export default NavMenu
