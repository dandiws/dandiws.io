import { Inter, Space_Grotesk } from '@next/font/google'
import clsx from 'clsx'
import CmdkLazy from 'components/CmdkLazy'
import Container from 'components/Container'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Providers from 'components/Providers'
import SkipToContent from 'components/SkipToContent'
import { ServerThemeProvider } from 'next-themes'
import { PropsWithChildren } from 'react'
import '../styles/global.css'

const inter = Inter({
  weight: ['400', '700'],
  variable: '--font-inter',
  subsets: ['latin']
})

const spaceGrotek = Space_Grotesk({
  weight: '700',
  variable: '--font-space-grotesk',
  subsets: ['latin']
})

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <ServerThemeProvider attribute="class">
      <html lang="en" className={clsx(inter.variable, spaceGrotek.variable)}>
        <head />
        <body>
          <Providers>
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
