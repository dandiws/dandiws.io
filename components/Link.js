import { forwardRef } from 'react'

const Link = forwardRef(({ isExternal = false, ...props }, ref) => {
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
