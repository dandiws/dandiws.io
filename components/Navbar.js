import NextLink from 'next/link'
import Sun from './icons/Sun'
import Moon from './icons/Moon'
import Hamburger from './icons/Hamburger'
import Close from './icons/Close'
import { useState, useEffect, useCallback } from 'react'
import DwLogo from './icons/DwLogo'
import Container from './Container'
import NavMenu from './NavMenu'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import Link from './Link'
import clsx from 'clsx'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  useEffect(() => {
    setMenuOpen(false)
  }, [router.asPath])

  const toggleMenu = () => {
    setMenuOpen((current) => !current)
  }

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [theme])

  return (
    <div
      className={clsx('py-6', menuOpen && 'fixed inset-0 md:relative')}
      py={4}
    >
      <Container>
        <div className="flex items-center">
          <div>
            <NextLink href="/">
              <Link>
                <DwLogo className="cursor-pointer h-10 w-10" />
              </Link>
            </NextLink>
          </div>
          <div
            className="flex items-center text-gray ml-auto"
            align="center"
            color="gray.500"
          >
            <NavMenu show={menuOpen} />
            <div className="flex space-x-2">
              <button
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className="icon-btn"
              >
                {theme === 'dark' ? <Sun /> : <Moon />}
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
