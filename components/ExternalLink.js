import ExternalLinkIcon from './icons/ExternalLink'

const ExternalLink = ({ children, ...props }) => (
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
