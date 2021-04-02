import Layout from '../components/Layout'
import { MDXProvider } from '@mdx-js/react'
import mdxcomponents from '../utils/mdxcomponents'
import theme from '../theme'
import prism from '../styles/prism'
import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'

function MyApp ({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <MDXProvider components={mdxcomponents}>
        <Layout>
          <Global styles={prism} />
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ChakraProvider>
  )
}

export default MyApp
