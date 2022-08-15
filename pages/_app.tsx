import 'styles/global.css'
import 'styles/prism.css'
import Layout from '../components/Layout'
import { MDXProvider } from '@mdx-js/react'
import mdxcomponents from '../components/mdxcomponents'
import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import { AccentProvider } from 'lib/accent-provider'
import { LazyMotion } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import NextSeoConfig from 'lib/next-seo.config'

const loadFeatures = () =>
  import('../utils/motion-features').then(res => res.default)

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <AccentProvider>
        <MDXProvider components={mdxcomponents}>
          <LazyMotion features={loadFeatures} strict>
            <Layout>
              <DefaultSeo {...NextSeoConfig} />
              <Component {...pageProps} />
            </Layout>
          </LazyMotion>
        </MDXProvider>
      </AccentProvider>
    </ThemeProvider>
  )
}

export default MyApp
