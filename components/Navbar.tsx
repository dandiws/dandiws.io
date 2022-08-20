import clsx from 'clsx'
import { useCmdkState } from 'lib/cmdk-provider'
import { useMounted } from 'lib/hooks/useMounted'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { isMac } from 'utils/isMac'
import Container from './Container'
import Close from './icons/Close'
import DwLogo from './icons/DwLogo'
import Hamburger from './icons/Hamburger'
import Moon from './icons/Moon'
import Search from './icons/Search'
import Sun from './icons/Sun'
import Link from './Link'
import { MobileNavMenu, NavMenu } from './NavMenu'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [, setOpenCmdk] = useCmdkState()
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
          <div className="flex items-center">
            <NextLink href="/" passHref>
              <Link aria-label="Home page">
                <DwLogo
                  fgclassname="fill-white dark:fill-dark-200"
                  className="cursor-pointer h-10 w-10 text-accent"
                />
              </Link>
            </NextLink>
            <button
              onClick={() => setOpenCmdk(true)}
              className="hidden md:block ml-6 bg-base hover:bg-base-2 transition-colors duration-200 text-gray focus:outline-none text-left text-[11px] ring-1 ring-slate-600/25 py-1.5 px-3 rounded-md">
              <Search />
              <kbd className="whitespace-nowrap ml-8">
                {isMac() ? '⌘' : 'Ctrl'}+K
              </kbd>
            </button>
          </div>
          <div className="flex items-center text-gray ml-auto">
            <NavMenu />
            <MobileNavMenu show={menuOpen} />
            <div className="flex space-x-2 ml-5">
              <button
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className="icon-btn h-7 w-7 relative overflow-hidden">
                <span
                  className={clsx(
                    'absolute w-7 h-7 grid place-items-center transition-transform origin-bottom-right duration-300',
                    mounted && theme === 'light' ? 'rotate-0' : 'rotate-180'
                  )}>
                  <Sun />
                </span>
                <span
                  className={clsx(
                    'absolute w-7 h-7 grid place-items-center transition-transform origin-bottom-left duration-300',
                    mounted && theme === 'dark' ? 'rotate-0' : '-rotate-180'
                  )}>
                  <Moon />
                </span>
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
