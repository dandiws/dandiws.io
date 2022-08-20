import clsx from 'clsx'
import { MENU_ITEMS } from 'contants/menu'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { ComponentProps, Fragment, useMemo } from 'react'
import Link from './Link'

export interface NavLinkProps extends ComponentProps<typeof Link> {
  activeClassName?: string
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
    return props.isExternal
      ? [Fragment, null]
      : [NextLink, { href, passHref: true, activeClassNam: 'active' }]
  }, [props.isExternal])

  return (
    <Root {...rootProps}>
      <Link
        className={`cursor-pointer block mx-5 my-3 md:my-0 hover:text-accent ${
          active && activeClassName ? activeClassName : ''
        }`}
        href={href}
        {...props}>
        {children}
      </Link>
    </Root>
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

export const MobileNavMenu = ({ show, ...props }) => {
  return (
    <nav className={clsx('nav-mobile md:hidden', show && 'show')} {...props}>
      {MENU_ITEMS.map(({ href, name, isExternal }, index) => (
        <div
          key={href}
          className={clsx(
            'opacity-0 translate-y-full',
            show && 'animate-slideUp'
          )}
          style={{
            animationDelay: `${(index + 1) * 100}ms`
          }}>
          <NavLink
            href={href}
            isExternal={isExternal}
            activeClassName="text-accent">
            {name}
          </NavLink>
        </div>
      ))}
    </nav>
  )
}

export default NavMenu
