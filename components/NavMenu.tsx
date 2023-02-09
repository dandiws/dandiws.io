'use client'

import clsx from 'clsx'
import { MENU_ITEMS } from 'contants/menu'
import { usePathname } from 'next/navigation'
import { ComponentProps, useState } from 'react'
import Close from './icons/Close'
import Hamburger from './icons/Hamburger'
import Link from './Link'

export interface NavLinkProps extends ComponentProps<typeof Link> {
  activeClassName?: string
}

export const NavLink = ({ activeClassName, ...props }: NavLinkProps) => {
  const pathname = usePathname()
  const active = pathname === props.href

  return (
    <Link
      className={clsx(
        `cursor-pointer block mx-5 my-3 md:my-0 hover:text-accent`,
        active && activeClassName
      )}
      {...props}
    />
  )
}

export const NavMenu = () => (
  <nav className="hidden md:flex md:nav-desktop">
    {MENU_ITEMS.map(({ href, name, isExternal }) => (
      <NavLink
        key={href}
        href={href}
        isExternal={isExternal}
        activeClassName="text-accent">
        {name}
      </NavLink>
    ))}
  </nav>
)

export const MobileNavMenu = (props) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen((c) => !c)

  return (
    <>
      <nav
        className={clsx('nav-mobile md:hidden', menuOpen && 'show')}
        {...props}>
        {MENU_ITEMS.map(({ href, name, isExternal }, index) => (
          <div
            key={href}
            className={clsx(
              'opacity-0 translate-y-full',
              menuOpen && 'animate-slideUp'
            )}
            style={{
              animationDelay: `${(index + 1) * 100}ms`
            }}>
            <NavLink
              href={href}
              isExternal={isExternal}
              activeClassName="text-accent"
              onClick={toggleMenu}>
              {name}
            </NavLink>
          </div>
        ))}
      </nav>
      <button
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className="icon-btn block md:hidden z-10"
        onClick={toggleMenu}>
        {menuOpen ? <Close /> : <Hamburger />}
      </button>
    </>
  )
}

export default NavMenu
