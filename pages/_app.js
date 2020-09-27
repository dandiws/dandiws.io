import { ChakraProvider, Global } from '@chakra-ui/core'
import Layout from '../components/Layout'
import globalStyle from '../styles/global'
import { MDXProvider } from '@mdx-js/react'
import mdxcomponents from '../utils/mdxcomponents'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <MDXProvider components={mdxcomponents}>
        <Layout>
          <Global styles={globalStyle} />
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ChakraProvider>
  )
}

export default MyApp
