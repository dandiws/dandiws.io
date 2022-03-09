import Navbar from './Navbar'
import Footer from './Footer'
import SkipToContent from './SkipToContent'

const Layout = ({ children }) => {
  return (
    <>
      <SkipToContent />
      <Navbar />
      <main id="main" className="py-16">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
