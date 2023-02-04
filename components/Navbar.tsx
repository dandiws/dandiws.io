import NextLink from 'next/link'
import CmdkSearchButton from './CmdkSearchButton'
import Container from './Container'
import DwLogo from './icons/DwLogo'
import { MobileNavMenu, NavMenu } from './NavMenu'
import ThemeToggler from './ThemeToggler'

const Navbar = () => {
  return (
    <div className="py-6">
      <Container>
        <div className="flex items-center">
          <div className="flex items-center">
            <NextLink href="/" aria-label="Home page">
              <DwLogo
                fgclassname="fill-white dark:fill-dark-200"
                className="cursor-pointer h-10 w-10 text-accent"
              />
            </NextLink>
            <CmdkSearchButton />
          </div>
          <div className="flex items-center text-gray ml-auto">
            <NavMenu />
            <ThemeToggler />
            <MobileNavMenu />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
