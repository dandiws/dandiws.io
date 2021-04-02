import Navbar from './Navbar'
import Footer from './Footer'
import { Box } from '@chakra-ui/layout'
import { useColorMode } from '@chakra-ui/color-mode'
import { Global } from '@emotion/react'
import { prismcssDark, prismcssLight } from 'styles/prism'

const Layout = ({ children }) => {
  const { colorMode } = useColorMode()
  return (
    <Box>
      <Global styles={colorMode === 'dark' ? prismcssDark : prismcssLight} />
      <Navbar />
      <Box as="main" py={16}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
