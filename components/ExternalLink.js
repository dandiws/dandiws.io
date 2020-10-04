import { Link } from '@chakra-ui/core'
import ExternalLinkIcon from './icons/ExternalLink'

const ExternalLink = ({ children, ...props }) => (
  <Link
    _hover={{ color: 'red.400' }}
    textDecor="underline"
    {...props}
    isExternal
  >
    {children} <ExternalLinkIcon color="current" />
  </Link>
)

export default ExternalLink
