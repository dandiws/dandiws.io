import Link from './Link'
import NextLink from 'next/link'
import clsx from 'clsx'

const NavLink = ({ href, children, ...props }) => (
  <NextLink href={href}>
    <Link
      className="cursor-pointer mx-5 my-3 md:my-0 hover:text-accent-400"
      {...props}
    >
      {children}
    </Link>
  </NextLink>
)

const NavMenu = ({ show, ...props }) => {
  const smallClass =
    'bg-dark-200 fixed top-0 left-0 w-full h-screen flex-col text-xl'
  const mediumClass =
    'md:bg-transparent md:relative md:top-auto md:left-auto md:w-auto md:h-auto md:flex-row md:text-base '

  return (
    <nav
      className={clsx(
        'flex z-10 items-center justify-center transition-transform mr-6',
        smallClass,
        mediumClass,
        [show ? 'translate-x-0' : 'translate-x-full', 'md:translate-x-0']
      )}
      {...props}
    >
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/resume.pdf">Resume</NavLink>
    </nav>
  )
}

export default NavMenu
