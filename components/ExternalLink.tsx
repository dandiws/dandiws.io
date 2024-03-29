import { ComponentProps } from 'react'
import ExternalLinkIcon from './icons/ExternalLink'

const ExternalLink = ({ children, ...props }: ComponentProps<'a'>) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-accent underline whitespace-nowrap"
    {...props}>
    {children} <ExternalLinkIcon aria-hidden />
  </a>
)

export default ExternalLink
