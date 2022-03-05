import 'styles/global.css'
import 'styles/prism.css'
import Layout from '../components/Layout'
import { MDXProvider } from '@mdx-js/react'
import mdxcomponents from '../components/mdxcomponents'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import { AccentProvider } from 'lib/accent-provider'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <AccentProvider>
        <MDXProvider components={mdxcomponents}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </AccentProvider>
    </ThemeProvider>
  )
}

export default MyApp
