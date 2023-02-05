import Container from './Container'
import NextLink from 'next/link'
import Link from 'components/Link'
import CopyrightIcon from './icons/CopyrightIcon'
import AccentButtons from './AccentButtons'

const Footer = () => {
  const thisYear = new Date().getFullYear()
  return (
    <footer className="text-gray text-sm mt-8">
      <Container className="py-8 border-t border-gray-200 dark:border-dark-100 transition-colors duration-300">
        <div className="grid grid-cols-2">
          <div className="py-4 flex flex-col space-y-4">
            <NextLink
              href="/"
              className="cursor-pointer text-gray hover:text-gray-800 dark:hover:text-gray-300">
              Home
            </NextLink>
            <NextLink
              href="/about"
              className="cursor-pointer text-gray hover:text-gray-800 dark:hover:text-gray-300">
              About
            </NextLink>
            <NextLink
              href="/blog"
              className="cursor-pointer text-gray hover:text-gray-800 dark:hover:text-gray-300">
              Blog
            </NextLink>
          </div>
          <div className="py-4 flex flex-col space-y-4">
            <NextLink
              href="/projects"
              className="cursor-pointer text-gray hover:text-gray-800 dark:hover:text-gray-300">
              Projects
            </NextLink>
            <NextLink
              href="/privacy"
              className="cursor-pointer text-gray hover:text-gray-800 dark:hover:text-gray-300">
              Privacy Policy
            </NextLink>
            <Link
              href="https://github.com/dandiws/dandiws.io"
              title="Github Repository"
              className="text-gray hover:text-gray-800 dark:hover:text-gray-300"
              isExternal>
              Github
            </Link>
          </div>
        </div>
        <div className="flex justify-between py-4 mt-4">
          <span className="flex items-center space-x-2">
            <CopyrightIcon /> <span>Dandi W.S.</span>{' '}
            <span>2020 - {thisYear}</span>
          </span>
          <AccentButtons />
        </div>
      </Container>
    </footer>
  )
}

export default Footer
