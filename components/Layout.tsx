import Navbar from './Navbar'
import Footer from './Footer'
import SkipToContent from './SkipToContent'
import Cmdk from './Cmdk'

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
