import Link from './Link'
import Github from './icons/Github'
import Instagram from './icons/Instagram'
import Linkedin from './icons/Linkedin'
import Mail from './icons/Mail'

const SocialButtons = () => (
  <div className="flex space-x-2 text-gray">
    <Link
      href="https://github.com/dandiws"
      isExternal
      aria-label="Github profile"
      className="icon-btn"
    >
      <Github />
    </Link>
    <Link
      href="https://id.linkedin.com/in/dandi-wiratsangka-5300a9132"
      ml={3}
      isExternal
      aria-label="Linkedin profile"
      className="icon-btn"
    >
      <Linkedin />
    </Link>
    <Link
      href="https://instagram.com/dandiws"
      isExternal
      aria-label="Instagram profile"
      className="icon-btn"
    >
      <Instagram />
    </Link>
    <Link
      href="mailto:dandiwiratsangka@gmail.com"
      isExternal
      aria-label="Email to dandiwiratsangka@gmail.com"
      className="icon-btn"
    >
      <Mail />
    </Link>
  </div>
)

export default SocialButtons
