import { ComponentProps } from 'react'
import ExternalLinkIcon from './icons/ExternalLink'

const ExternalLink = ({ children, ...props }: ComponentProps<'a'>) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-accent-400 underline"
    {...props}
  >
    {children} <ExternalLinkIcon />
  </a>
)

export default ExternalLink
