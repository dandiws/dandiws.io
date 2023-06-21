import clsx from 'clsx'
import CmdkLazy from 'components/CmdkLazy'
import Container from 'components/Container'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Providers from 'components/Providers'
import SkipToContent from 'components/SkipToContent'
import { getRandomTheme, NextThemes } from 'contants/themes'
import { ServerThemeProvider } from 'next-themes'
import { Manrope } from 'next/font/google'
import localFont from 'next/font/local'
import { PropsWithChildren } from 'react'
import '../styles/global.css'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
  style: 'normal'
})

const satoshi = localFont({
  variable: '--font-satoshi',
  display: 'swap',
  src: [
    {
      path: '../public/fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ]
})

const randomDarkAccentTheme = getRandomTheme()

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <ServerThemeProvider
      disableTransitionOnChange
      defaultTheme={randomDarkAccentTheme}
      themes={NextThemes}>
      <html lang="en" className={clsx(manrope.variable, satoshi.variable)}>
        <head />
        <body>
          <Providers themes={NextThemes} defaultTheme={randomDarkAccentTheme}>
            <SkipToContent />
            <Navbar />
            <main id="main">
              <Container>{children}</Container>
            </main>
            <Footer />
            <CmdkLazy />
          </Providers>
        </body>
      </html>
    </ServerThemeProvider>
  )
}

export const metadata = {
  themeColor: '#ffffff',
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      sizes: '32x32',
      type: 'image/png',
      url: '/favicon-32x32.png'
    },
    {
      rel: 'icon',
      sizes: '16x16',
      type: 'image/png',
      url: '/favicon-16x16.png'
    }
  ]
}
