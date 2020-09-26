import Navbar from './Navbar'
import Footer from './Footer'
import { Box } from '@chakra-ui/core'

const Layout = ({ children }) => {
  return (
    <Box mx={5}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Box>
  )
}

export default Layout
