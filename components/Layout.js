import Navbar from './Navbar'
import Footer from './Footer'
import { Box } from '@chakra-ui/layout'

const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box as="main" py={16}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
