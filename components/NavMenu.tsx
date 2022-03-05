import Link from './Link'
import NextLink from 'next/link'
import clsx from 'clsx'
import { ComponentProps, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { fadeDownVariant } from 'utils/motions'

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
    <NavLink href="/blog">Blog</NavLink>
    <NavLink href="/about">About</NavLink>
    <NavLink href="/resume.pdf">Resume</NavLink>
  </nav>
)

export const MobileNavMenu = ({ show, ...props }) => {
  const controls = useAnimation()
  const duration = 0.4

  useEffect(() => {
    if (show) controls.start('visible')
    else controls.set('hidden')
  }, [show])

  return (
    <nav
      className={clsx('nav-mobile md:hidden', show && 'show')}
      {...props}
    >
      <motion.div
        variants={fadeDownVariant}
        initial="hidden"
        animate={controls}
        transition={{
          duration,
          delay: duration * 0.5
        }}
      >
        <NavLink href="/blog">Blog</NavLink>
      </motion.div>

      <motion.div
        variants={fadeDownVariant}
        initial="hidden"
        animate={controls}
        transition={{
          duration,
          delay: 2 * 0.5 * duration
        }}
      >
        <NavLink href="/about">About</NavLink>
      </motion.div>
      <motion.div
        variants={fadeDownVariant}
        initial="hidden"
        animate={controls}
        transition={{
          duration,
          delay: 3 * 0.5 * duration
        }}
      >
        <NavLink href="/resume.pdf">Resume</NavLink>
      </motion.div>
    </nav>
  )
}

export default NavMenu
