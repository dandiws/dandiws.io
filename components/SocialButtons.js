import { IconButton } from '@chakra-ui/button'
import { HStack, Link } from '@chakra-ui/layout'
import Github from './icons/Github'
import Instagram from './icons/Instagram'
import Linkedin from './icons/Linkedin'
import Mail from './icons/Mail'

const SocialButtons = () => (
  <HStack spacing={3}>
    <Link href="https://github.com/dandiws" isExternal>
      <IconButton as="span" icon={<Github />} />
    </Link>
    <Link
      href="https://id.linkedin.com/in/dandi-wiratsangka-5300a9132"
      ml={3}
      isExternal
    >
      <IconButton as="span" icon={<Linkedin />} />
    </Link>
    <Link href="https://instagram.com/dandiws" isExternal>
      <IconButton as="span" icon={<Instagram />} />
    </Link>
    <Link href="mailto:dandiwiratsangka@gmail.com" isExternal>
      <IconButton as="span" icon={<Mail />} />
    </Link>
  </HStack>
)

export default SocialButtons
