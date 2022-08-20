import { useMounted } from 'lib/hooks/useMounted'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo, useState } from 'react'
import Container from './Container'
import Close from './icons/Close'
import DwLogo from './icons/DwLogo'
import Hamburger from './icons/Hamburger'
import Moon from './icons/Moon'
import Sun from './icons/Sun'
import Link from './Link'
import { MobileNavMenu, NavMenu } from './NavMenu'

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

  const themecolor = useMemo(
    () => (theme === 'dark' ? '#101215' : '#ffffff'),
    [theme]
  )

  return (
    <div className="py-6">
      <Head>
        <meta name="theme-color" content={themecolor} />
      </Head>
      <Container>
        <div className="flex items-center">
          <div>
            <NextLink href="/" passHref>
              <Link aria-label="Home page">
                <DwLogo
                  fgclassname="fill-white dark:fill-dark-200"
                  className="cursor-pointer h-10 w-10 text-accent"
                />
              </Link>
            </NextLink>
          </div>
          <div className="flex items-center text-gray ml-auto">
            <NavMenu />
            <MobileNavMenu show={menuOpen} />
            <div className="flex space-x-2 ml-5">
              <button
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className="icon-btn h-7 w-7 relative overflow-hidden">
                {mounted && (
                  <>
                    <span className="absolute w-7 h-7 grid place-items-center">
                      <Sun />
                    </span>
                    <span className="absolute w-7 h-7 grid place-items-center">
                      <Moon />
                    </span>
                  </>
                )}
              </button>
              <button
                aria-label={
                  menuOpen ? 'Close navigation menu' : 'Open navigation menu'
                }
                className="icon-btn block md:hidden z-10"
                onClick={toggleMenu}>
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
