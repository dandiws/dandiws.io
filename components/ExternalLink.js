import { Link } from '@chakra-ui/layout'
import ExternalLinkIcon from './icons/ExternalLink'

const ExternalLink = ({ children, ...props }) => (
  <Link
    _hover={{ color: 'red.400' }}
    textDecor="underline"
    {...props}
    isExternal
  >
    {children} <ExternalLinkIcon />
  </Link>
)

export default ExternalLink
