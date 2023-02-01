import 'styles/global.css'
import Layout from '../components/Layout'
import { MDXProvider } from '@mdx-js/react'
import mdxcomponents from '../components/mdxcomponents'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import { AccentProvider } from 'lib/accent-provider'

import { DefaultSeo } from 'next-seo'
import NextSeoConfig from 'lib/next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <AccentProvider>
        <MDXProvider components={mdxcomponents}>
          <Layout>
            <DefaultSeo {...NextSeoConfig} />
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </AccentProvider>
    </ThemeProvider>
  )
}

export default MyApp
