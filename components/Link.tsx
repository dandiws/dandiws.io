import NextLink from 'next/link'
import { ComponentPropsWithRef } from 'react'

export interface LinkProps {
  isExternal?: boolean
}

// const Link = forwardRef<
//   HTMLAnchorElement,
//   PropsWithChildren<LinkProps> & HTMLProps<HTMLAnchorElement>
// >(({ isExternal = false, children, ...props }, ref) => {
//   return (
//     <a
//       ref={ref}
//       target={isExternal ? '_blank' : undefined}
//       rel={isExternal ? 'noopener noreferrer' : undefined}
//       {...props}>
//       {children}
//     </a>
//   )
// })

// Link.displayName = 'Link'

function Link({
  isExternal,
  ...props
}: ComponentPropsWithRef<typeof NextLink> & LinkProps) {
  const Component = (isExternal ? 'a' : NextLink) as any
  return (
    <Component
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      {...props}
    />
  )
}

export default Link
