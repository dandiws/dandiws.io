import NextLink from 'next/link'
import Sun from './icons/Sun'
import Moon from './icons/Moon'
import Hamburger from './icons/Hamburger'
import Close from './icons/Close'
import { useState, useEffect, useCallback } from 'react'
import DwLogo from './icons/DwLogo'
import Container from './Container'
import { NavMenu, MobileNavMenu } from './NavMenu'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import Link from './Link'
import { useMounted } from 'lib/hooks/useMounted'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const mounted = useMounted()

  useEffect(() => {
    setMenuOpen(false)
  }, [router.asPath])

  useEffect(() => {
    if (menuOpen) {
      document && (document.body.style.overflow = 'hidden')
    } else {
      document && (document.body.style.overflow = null)
    }
  }, [menuOpen])

  const toggleMenu = () => {
    setMenuOpen((current) => !current)
  }

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [theme])

  return (
    <div className="py-6">
      <Container>
        <div className="flex items-center">
          <div>
            <NextLink href="/" passHref>
              <Link aria-label="Home page">
                <DwLogo className="cursor-pointer h-10 w-10 accent" />
              </Link>
            </NextLink>
          </div>
          <div className="flex items-center text-gray ml-auto">
            <NavMenu />
            <MobileNavMenu show={menuOpen} />
            <div className="flex space-x-2">
              <button
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className="icon-btn"
              >
                {mounted && theme === 'dark' ? <Sun /> : <Moon />}
              </button>
              <button
                aria-label={
                  menuOpen ? 'Close navigation menu' : 'Open navigation menu'
                }
                className="icon-btn block md:hidden z-10"
                onClick={toggleMenu}
              >
                {menuOpen ? <Close /> : <Hamburger />}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
