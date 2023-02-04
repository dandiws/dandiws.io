import ArticleList from 'components/ArticleList'
import ExternalLink from 'components/ExternalLink'
import ArrowRightIcon from 'components/icons/ArrowRightIcon'
import Link from 'components/Link'
import ProjectList from 'components/ProjectList'
import Section from 'components/Section'
import { allPosts } from 'contentlayer/generated'
import { getFeaturedProjects } from 'utils/projects'

export default function Page() {
  const latestArticles = allPosts.slice(0, 3)
  const featuredProjects = getFeaturedProjects()

  return (
    <>
      <header className="py-32">
        <div className="mb-4 text-accent font-medium">Hello, my name is</div>
        <h1 className="mb-3 text-3xl md:text-6xl">Dandi Wiratsangka</h1>
        <div className="text-gray leading-relaxed max-w-xl">
          <p>
            I'm a software engineer at{' '}
            <ExternalLink href="https://glair.ai">glair</ExternalLink>. I make
            web and mobile apps. This is where i write articles about anything
            that might help someone. Hope you enjoy!
          </p>
        </div>
      </header>
      <Section>
        <h2 className="section-title">Latest Articles</h2>
        <ArticleList posts={latestArticles} />
        <div className="flex mt-8">
          <Link
            href="/blog"
            className="more-btn text-sm flex flex-row text-gray hover:text-accent hover:underline underline-offset-2">
            Browse more articles
            <ArrowRightIcon aria-hidden className="arrow self-center ml-1" />
          </Link>
        </div>
      </Section>
      <Section>
        <h2 className="section-title">Projects</h2>
        <ProjectList projects={featuredProjects} />
        <div className="flex mt-14">
          <Link
            href="/projects"
            className="more-btn text-sm flex flex-row text-gray hover:text-accent hover:underline underline-offset-2">
            See all projects
            <ArrowRightIcon aria-hidden className="arrow self-center ml-1" />
          </Link>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col text-center items-center leading-relaxed">
          <h2 className="text-3xl mb-3">Get in touch</h2>
          <p className="text-gray">My inbox is always open for everyone!</p>
          <div className="mt-4 flex justify-center">
            <a
              className="px-8 inline-flex font-heading py-2 rounded-full ring-1 text-accent ring-accent-light dark:ring-accent-dark hover:bg-accent hover:text-white transition-colors duration-300"
              href="mailto:dandiwiratsangka.com">
              Contact Me
            </a>
          </div>
        </div>
      </Section>
      <div className="mt-20" />
    </>
  )
}