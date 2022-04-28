import Link from './Link'
import NextLink from 'next/link'
import clsx from 'clsx'
import { ComponentProps, Fragment, useEffect, useMemo } from 'react'
import { m, useAnimation } from 'framer-motion'
import { fadeDownVariant } from 'utils/motions'
import { useRouter } from 'next/router'

// [slug, title, isExternal?]
type MenuItem = [string, string] | [string, string, true]

const MENU_ITEMS: MenuItem[] = [
  ['/', 'Home'],
  ['/blog', 'Blog'],
  ['/about', 'About'],
  ['/projects', 'Projects'],
  ['/resume.pdf', 'Resume', true]
]

export interface NavLinkProps extends ComponentProps<typeof Link> {
  activeClassName?: string;
}

export const NavLink = ({
  href,
  children,
  activeClassName,
  ...props
}: NavLinkProps) => {
  const { asPath } = useRouter()

  const active = useMemo(() => asPath === href, [asPath])

  const [Root, rootProps] = useMemo(() => {
    return props.isExternal ? [Fragment, null] : [NextLink, { href, passHref: true, activeClassNam: 'active' }]
  }, [props.isExternal])

  return (
    <Root {...rootProps}>
      <Link
        className={`cursor-pointer block mx-5 my-3 md:my-0 hover:text-accent ${active && activeClassName ? activeClassName : ''}`}
        href={href}
        {...props}
      >
        {children}
      </Link>
    </Root>
  )
}

export const NavMenu = () => (
  <nav className="hidden md:flex md:nav-desktop">
    {MENU_ITEMS.map(([href, title, isExternal]) => (
      <NavLink
        key={href}
        href={href}
        isExternal={isExternal}
        activeClassName="text-accent"
      >
        {title}
      </NavLink>
    ))}
  </nav>
)

export const MobileNavMenu = ({ show, ...props }) => {
  const controls = useAnimation()
  const duration = 0.25
  const delayOffset = 0.2

  useEffect(() => {
    if (show) controls.start('visible')
    else controls.set('hidden')
  }, [show])

  return (
    <nav className={clsx('nav-mobile md:hidden', show && 'show')} {...props}>
      {MENU_ITEMS.map(([href, title, isExternal], index) => (
        <m.div
          key={href}
          variants={fadeDownVariant}
          initial="hidden"
          animate={controls}
          transition={{
            duration,
            delay: (index + 1) * duration * 0.5 + delayOffset
          }}
        >
          <NavLink href={href} isExternal={isExternal} activeClassName="text-accent">{title}</NavLink>
        </m.div>
      ))}
    </nav>
  )
}

export default NavMenu
