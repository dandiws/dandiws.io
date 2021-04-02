import Layout from '../components/Layout'
import { MDXProvider } from '@mdx-js/react'
import mdxcomponents from '../utils/mdxcomponents'
import theme from '../theme'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp ({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <MDXProvider components={mdxcomponents}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ChakraProvider>
  )
}

export default MyApp
