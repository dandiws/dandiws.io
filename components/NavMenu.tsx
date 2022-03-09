import Link from './Link'
import NextLink from 'next/link'
import clsx from 'clsx'
import { ComponentProps, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { fadeDownVariant } from 'utils/motions'

const MENU_ITEMS: Array<[string, string]> = [
  ['/blog', 'Blog'],
  ['/about', 'About'],
  ['/projects', 'Projects'],
  ['/resume.pdf', 'Resume']
]

export const NavLink = ({
  href,
  children,
  ...props
}: ComponentProps<typeof Link>) => (
  <NextLink href={href} passHref>
    <Link
      className="cursor-pointer block mx-5 my-3 md:my-0 hover:text-accent"
      {...props}
    >
      {children}
    </Link>
  </NextLink>
)

export const NavMenu = () => (
  <nav className="hidden md:flex md:nav-desktop">
    {MENU_ITEMS.map(([href, title]) => (
      <NavLink key={href} href={href}>
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
      {MENU_ITEMS.map(([href, title], index) => (
        <motion.div
          key={href}
          variants={fadeDownVariant}
          initial="hidden"
          animate={controls}
          transition={{
            duration,
            delay: (index + 1) * duration * 0.5 + delayOffset
          }}
        >
          <NavLink href={href}>{title}</NavLink>
        </motion.div>
      ))}
    </nav>
  )
}

export default NavMenu
