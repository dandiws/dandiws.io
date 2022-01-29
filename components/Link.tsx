import { forwardRef, HTMLProps, PropsWithChildren } from 'react'

export interface LinkProps {
  isExternal?: boolean;
}

const Link = forwardRef<
  HTMLAnchorElement,
  PropsWithChildren<LinkProps> & HTMLProps<HTMLAnchorElement>
>(({ isExternal = false, ...props }, ref) => {
  return (
    <a
      ref={ref}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      {...props}
    />
  )
})

Link.displayName = 'Link'

export default Link
