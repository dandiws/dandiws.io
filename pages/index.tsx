import Head from 'next/head'
import Container from 'components/Container'
import ArticleList from 'components/ArticleList'
import NextLink from 'next/link'
import ProjectList from 'components/ProjectList'
import { getFeaturedProjects } from 'utils/projects'
import ExternalLink from 'components/ExternalLink'
import { getLatestArticles } from 'utils/mdxUtils'
import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'
import { Post, Project } from 'utils/types'
import { m } from 'framer-motion'
import { fadeUpVariant } from 'utils/motions'
import ArrowRightIcon from 'components/icons/ArrowRightIcon'
import { createOgImageUrl } from 'utils/og-image'
import Section from 'components/Section'

interface HomeProps {
  latestArticles: Post[];
  featuredProjects: Project[];
}

export default function Home ({ latestArticles, featuredProjects }: HomeProps) {
  return (
    <Container>
      <Head>
        <title>Dandi Wiratsangka</title>
      </Head>
      <NextSeo
        title="Dandi Wiratsangka"
        description="Dandi Wiratsangka's personal website"
        openGraph={{
          images: [{
            url: createOgImageUrl('Dandi Wiratsangka', undefined, 150)
          }]
        }}
      />
      <header className="py-32">
        <m.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.4
          }}
          className="mb-4 text-accent font-medium"
        >
          Hello, my name is
        </m.div>
        <m.h1
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.2
          }}
          className="mb-3 text-3xl md:text-6xl"
        >
          Dandi Wiratsangka
        </m.h1>
        <m.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.4
          }}
          className="text-gray leading-relaxed max-w-xl"
        >
          <p>
            I'm a software engineer at{' '}
            <ExternalLink href="https://glair.ai">glair</ExternalLink>. I make
            web and mobile apps. This is where i write articles about anything
            that might help someone. Hope you enjoy!
          </p>
        </m.div>
      </header>
      <Section>
        <h2 className="section-title">Latest Articles</h2>
        <ArticleList posts={latestArticles} />
        <div className="flex mt-8">
          <NextLink href="/blog" passHref>
            <m.a
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="more-btn text-sm flex flex-row text-gray hover:text-accent hover:underline underline-offset-2"
            >
              Browse more articles
              <ArrowRightIcon aria-hidden className="arrow self-center ml-1" />
            </m.a>
          </NextLink>
        </div>
      </Section>
      <Section>
        <h2 className="section-title">Projects</h2>
        <ProjectList projects={featuredProjects} />
        <div className="flex mt-14">
          <NextLink href="/projects" passHref>
            <m.a
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="more-btn text-sm flex flex-row text-gray hover:text-accent hover:underline underline-offset-2"
            >
              See all projects
              <ArrowRightIcon aria-hidden className="arrow self-center ml-1" />
            </m.a>
          </NextLink>
        </div>
      </Section>
      <Section>
        <m.div
          initial={{
            opacity: 0,
            scale: 0.75
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="flex flex-col text-center items-center leading-relaxed"
        >
          <h2 className="text-3xl mb-3">Get in touch</h2>
          <p className="text-gray">My inbox is always open for everyone!</p>
          <div className="mt-4 flex justify-center">
            <a
              className="px-8 font-heading py-2 rounded-full ring-1 text-accent ring-accent-light dark:ring-accent-dark hover:bg-accent hover:text-white transition-colors duration-300"
              href="mailto:dandiwiratsangka.com"
            >
              Contact Me
            </a>
          </div>
        </m.div>
      </Section>
      <div className="mt-20" />
    </Container>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const latestArticles = getLatestArticles(3)
  const featuredProjects = getFeaturedProjects()
  return {
    props: {
      latestArticles,
      featuredProjects
    }
  }
}
