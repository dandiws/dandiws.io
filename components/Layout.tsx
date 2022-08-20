import Navbar from './Navbar'
import Footer from './Footer'
import SkipToContent from './SkipToContent'
import dynamic from 'next/dynamic'

const isBigScreen = () => typeof window !== 'undefined' && window.matchMedia('(min-width: 920px)').matches
const Cmdk = isBigScreen()
  ? dynamic(() => import('./Cmdk'), {
    ssr: false
  })
  : () => null

const Layout = ({ children }) => {
  return (
    <>
      <SkipToContent />
      <Navbar />
      <main id="main">
        {children}
      </main>
      <Footer />
      <Cmdk />
    </>
  )
}

export default Layout
