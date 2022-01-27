import Container from './Container'
import NextLink from 'next/link'
import Link from 'components/Link'
import Divider from './Divider'
import CopyrightIcon from './icons/CopyrightIcon'

const Footer = () => {
  const thisYear = new Date().getFullYear()
  return (
    <footer className="py-16 text-gray text-sm">
      <Container>
        <div className="flex justify-center items-center">
          <span className="flex items-center space-x-2">
            <CopyrightIcon /> <span>2020 - {thisYear}</span>
          </span>
          <Divider />
          <Link
            href="https://github.com/dandiws/dandiws.io"
            title="Github Repository"
            className="text-gray hover:text-gray-800 dark:hover:text-gray-300"
            isExternal
          >
            Github
          </Link>
          <Divider />
          <NextLink href="/privacy">
            <Link className="cursor-pointer text-gray hover:text-gray-800 dark:hover:text-gray-300">
              Privacy Policy
            </Link>
          </NextLink>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
