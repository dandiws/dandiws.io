import Link from './Link'
import NextLink from 'next/link'
import clsx from 'clsx'
import { ComponentProps } from 'react'

const NavLink = ({ href, children, ...props }: ComponentProps<typeof Link>) => (
  <NextLink href={href} passHref>
    <Link
      className="cursor-pointer mx-5 my-3 md:my-0 hover:text-accent-400"
      {...props}
    >
      {children}
    </Link>
  </NextLink>
)

const NavMenu = ({ show, ...props }) => {
  return (
    <nav
      className={clsx('nav-mobile md:nav-desktop', show && 'show')}
      {...props}
    >
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/resume.pdf">Resume</NavLink>
    </nav>
  )
}

export default NavMenu
