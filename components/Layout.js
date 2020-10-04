import Navbar from './Navbar'
import Footer from './Footer'
import { Box } from '@chakra-ui/core'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Layout = ({ children }) => {
  const router = useRouter()

  useEffect(() => {}, [router.asPath])
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
