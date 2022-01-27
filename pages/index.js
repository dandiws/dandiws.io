import { useMemo } from 'react'
import Head from 'next/head'
import Container from 'components/Container'
import ArticleList from 'components/ArticleList'
import NextLink from 'next/link'
import ProjectList from 'components/ProjectList'
import { getFeaturedProjects, getNonFeaturedProjects } from 'utils/projects'
import ExternalLink from 'components/ExternalLink'
import { getLatestArticles } from 'utils/mdxUtils'
import { NextSeo } from 'next-seo'

export default function Home ({ latestArticles }) {
  const featuredProjects = useMemo(getFeaturedProjects, [])
  // eslint-disable-next-line no-unused-vars
  const nonFeaturedProjects = useMemo(getNonFeaturedProjects, [])

  return (
    <Container>
      <Head>
        <title>Dandi Wiratsangka</title>
      </Head>
      <NextSeo
        title="Dandi Wiratsangka"
        description="Dandi Wiratsangka's personal website"
      />
      <div className="space-y-40">
        <header className="py-16">
          <div className="mb-4 text-accent-400 font-medium font-mono">
            Hello, my name is
          </div>
          <h1 className="mb-3 text-3xl md:text-6xl font-semibold">
            Dandi Wiratsangka
          </h1>
          <div className="text-gray leading-relaxed max-w-lg">
            <p>
              I'm a software engineer at{' '}
              <ExternalLink href="https://glair.ai">glair</ExternalLink>.
            </p>
            <p>
              I make web and mobile apps. This is where i write articles about anything that might help
              someone. Hope you enjoy!
            </p>
          </div>
        </header>
        <section>
          <h2 className="section-title">Latest Articles</h2>
          <ArticleList posts={latestArticles} />
          <div className="flex justify-center mt-8">
            <NextLink href="/blog">
              <button className="text-sm text-gray bg-gray-200 hover:bg-gray-300 dark:bg-gray-800  dark:hover:bg-gray-800/75 px-4 py-2 rounded-md">
                Browse more
              </button>
            </NextLink>
          </div>
        </section>
        <section>
          <h2 className="section-title">Projects</h2>
          <ProjectList projects={featuredProjects} />
        </section>
      </div>
    </Container>
  )
}

export const getStaticProps = async () => {
  const latestArticles = getLatestArticles(3)
  return {
    props: {
      latestArticles
    }
  }
}
