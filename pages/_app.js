import { ChakraProvider, Global } from '@chakra-ui/core'
import Layout from '../components/Layout'
import { MDXProvider } from '@mdx-js/react'
import mdxcomponents from '../utils/mdxcomponents'
import theme from '../theme'
import prism from '../styles/prism'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

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
