import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="py-16">
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
