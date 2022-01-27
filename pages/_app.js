import 'styles/global.css'
import 'styles/prism.css'
import Layout from '../components/Layout'
import { MDXProvider } from '@mdx-js/react'
import mdxcomponents from '../utils/mdxcomponents'
import { ThemeProvider } from 'next-themes'

function MyApp ({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={mdxcomponents}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default MyApp
