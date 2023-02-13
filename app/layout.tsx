import { Inter, Space_Grotesk as SpaceGrotesk } from '@next/font/google'
import clsx from 'clsx'
import CmdkLazy from 'components/CmdkLazy'
import Container from 'components/Container'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Providers from 'components/Providers'
import SkipToContent from 'components/SkipToContent'
import { getRandomTheme, NextThemes } from 'contants/themes'
import { ServerThemeProvider } from 'next-themes'
import { PropsWithChildren } from 'react'
import '../styles/global.css'

const inter = Inter({
  weight: ['400', '700'],
  variable: '--font-inter',
  subsets: ['latin']
})

const spaceGrotek = SpaceGrotesk({
  weight: '700',
  variable: '--font-space-grotesk',
  subsets: ['latin']
})

const randomDarkAccentTheme = getRandomTheme()

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <ServerThemeProvider
      disableTransitionOnChange
      defaultTheme={randomDarkAccentTheme}
      themes={NextThemes}>
      <html lang="en" className={clsx(inter.variable, spaceGrotek.variable)}>
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
