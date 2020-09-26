import { ChakraProvider } from '@chakra-ui/core'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
