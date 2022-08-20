// [slug, title, isExternal?]
export type MenuItem = {
  name: string
  href: string
  isExternal?: boolean
}

export const MENU_ITEMS: MenuItem[] = [
  { href: '/', name: 'Home' },
  { href: '/blog', name: 'Blog' },
  { href: '/about', name: 'About' },
  { href: '/projects', name: 'Projects' },
  { href: '/resume.pdf', name: 'Resume', isExternal: true }
]

export const CMDK_MENU_ITEMS: MenuItem[] = [
  ...MENU_ITEMS,
  { href: '/privacy', name: 'Privacy Policy' }
]
