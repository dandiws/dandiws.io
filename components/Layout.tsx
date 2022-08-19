import Navbar from './Navbar'
import Footer from './Footer'
import SkipToContent from './SkipToContent'

const Layout = ({ children }) => {
  return (
    <>
      <SkipToContent />
      <Navbar />
      <main id="main">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
