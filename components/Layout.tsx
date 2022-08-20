import Navbar from './Navbar'
import Footer from './Footer'
import SkipToContent from './SkipToContent'
import dynamic from 'next/dynamic'
import { CmdkProvider } from 'lib/cmdk-provider'

const isBigScreen = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(min-width: 768px)').matches

const Cmdk = isBigScreen()
  ? dynamic(() => import('./Cmdk'), {
      ssr: false
    })
  : () => null

const Layout = ({ children }) => {
  return (
    <CmdkProvider>
      <SkipToContent />
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
      <Cmdk />
    </CmdkProvider>
  )
}

export default Layout
