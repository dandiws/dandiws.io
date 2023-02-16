/* eslint-disable react/jsx-no-comment-textnodes */
import clsx from 'clsx'
import ArticleList from 'components/ArticleList'
import ExternalLink from 'components/ExternalLink'
import ArrowRightIcon from 'components/icons/ArrowRightIcon'
import LazyVideo from 'components/LazyVideo'
import Link from 'components/Link'
import Section from 'components/Section'
import { allPosts } from 'contentlayer/generated'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'
import { createOgImageUrl } from 'utils/og'
import { projects } from 'utils/projects'

export default function Page() {
  const latestArticles = allPosts.slice(0, 3)
  const dandiwsio = projects[2]
  const typefaster = projects[1]

  return (
    <>
      <header className="py-32">
        <h1 className="mb-6 text-3xl md:text-5xl font-manrope font-normal">
          Dandi Wiratsangka
        </h1>
        <div className="text-gray-500 text-xl md:text-2xl font-manrope">
          <p className="leading-relaxed max-w-screen-md">
            <Balancer>
              Tech enthusiast and a software engineer at{' '}
              <ExternalLink href="https://glair.ai">glair.ai</ExternalLink>.
              Constantly striving to create impactful web and mobile solutions.
              This is my space to share my musings and insights on the world of
              tech.
            </Balancer>
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
      <Section className="w-[90vw] relative left-[calc(-45vw_+_50%)]">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-center text-3xl">Featured Projects</h2>
          <div className="my-12 md:my-20" />
          {/* start */}
          <div
            data-accent="purple"
            className="bg-gradient-radial-to-br from-accent-light/5 to-accent-light/10 dark:from-gray-700 dark:to-dark-100 p-px rounded-3xl">
            <div className="flex items-center bg-transparent dark:bg-dark-100 flex-col lg:flex-row p-12 rounded-3xl overflow-hidden relative">
              <div className="w-full">
                <div className="flex mb-2">
                  <span className="postDetail">{dandiwsio.year}</span>
                </div>
                <h3 className="cursor-pointer hover:text-accent hover:underline text-2xl mb-3">
                  <Link
                    className={clsx({
                      typing: dandiwsio.name.toLowerCase() === 'typefaster'
                    })}
                    href={dandiwsio.url}
                    isExternal>
                    {dandiwsio.name}
                  </Link>
                </h3>
                <p className="text-gray mb-4">
                  {dandiwsio.longerSummary ?? dandiwsio.summary}
                </p>
                <div className="space-x-2">
                  {dandiwsio.tags &&
                    dandiwsio.tags.map((tag) => (
                      <span
                        className="bg-white/60 dark:bg-gray-800 shadow-sm shadow-accent-light/5 dark:shadow-none text-gray-500 dark:text-gray-400 text-xs py-1 px-2 rounded-md"
                        key={tag}>
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
              <div className="mx-16 my-5" />
              <div className="w-full relative">
                <Image
                  width={1440}
                  height={848}
                  src="/images/dandiws-light.png"
                  className={clsx(
                    'relative  select-none',
                    'z-[1] dark:z-0',
                    'scale-110 translate-y-1/4 dark:scale-100 dark:translate-y-0',
                    'lg:-translate-x-[12%] lg:translate-y-[16%] lg:dark:translate-x-0 lg:dark:translate-y-0',
                    'shadow-[5px_-5px_10px_-3px] shadow-accent-light/20 dark:shadow-dark-200/50'
                  )}
                  alt={dandiwsio.name}
                />
                <Image
                  width={1440}
                  height={848}
                  src="/images/dandiws-dark.png"
                  className={clsx(
                    'absolute top-0 select-none',
                    'z-0 dark:z-[1]',
                    'scale-100 translate-y-0 dark:scale-110 dark:translate-y-1/4',
                    'lg:dark:-translate-x-[12%] lg:dark:translate-y-[16%] lg:translate-x-0 lg:translate-y-0',
                    'shadow-[5px_-5px_10px_-3px] shadow-accent-light/20 dark:shadow-dark-200/50'
                  )}
                  alt={dandiwsio.name}
                />
              </div>
            </div>
          </div>
          {/* end */}
          <div className="my-12" />
          {/* start */}
          <div
            data-accent="green"
            className="bg-gradient-radial-to-br from-accent-light/5 to-accent-light/10 dark:from-gray-700 dark:to-dark-100 p-px rounded-3xl">
            <div className="flex items-center bg-transparent dark:bg-dark-100 flex-col lg:flex-row-reverse p-12 rounded-3xl overflow-hidden relative">
              <div className="w-full">
                <div className="flex mb-2">
                  <span className="postDetail">{typefaster.year}</span>
                </div>
                <h3 className="cursor-pointer hover:text-accent hover:underline text-2xl mb-3">
                  <Link
                    className={clsx({
                      typing: typefaster.name.toLowerCase() === 'typefaster'
                    })}
                    href={typefaster.url}
                    isExternal>
                    {typefaster.name}
                  </Link>
                </h3>
                <p className="text-gray mb-4">
                  {typefaster.longerSummary ?? typefaster.summary}
                </p>
                <div className="space-x-2">
                  {typefaster.tags &&
                    typefaster.tags.map((tag) => (
                      <span
                        className="bg-white/60 dark:bg-gray-800 shadow-sm shadow-accent-light/5 dark:shadow-none text-gray-500 dark:text-gray-400 text-xs py-1 px-2 rounded-md"
                        key={tag}>
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
              <div className="mx-8 my-5" />
              <div className="w-full relative">
                <LazyVideo
                  src="/typefaster.mp4"
                  width={1079}
                  height={568}
                  autoPlay
                  playsInline
                  muted
                  loop
                  className="rounded-xl shadow-lg shadow-accent-light/20 dark:shadow-gray-700/20 ring-1 ring-accent-dark/5 scale-110 translate-y-[5%] sm:scale-100 sm:translate-y-0"
                />
              </div>
            </div>
          </div>
          {/* end */}
          <div className="flex mt-14">
            <Link
              href="/projects"
              className="more-btn text-sm flex flex-row text-gray hover:text-accent hover:underline underline-offset-2">
              See all projects
              <ArrowRightIcon aria-hidden className="arrow self-center ml-1" />
            </Link>
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col text-center items-center leading-relaxed">
          <h2 className="text-3xl mb-3">Get in touch</h2>
          <p className="text-gray text-lg">
            My inbox is always open for everyone!
          </p>
          <div className="mt-8 flex justify-center">
            <a
              className="px-8 inline-flex font-heading py-2 rounded-full ring-1 text-accent ring-accent-light dark:ring-accent-dark hover:bg-accent hover:text-white"
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

const ogImageUrl = createOgImageUrl({
  background: '/images/space.jpeg',
  title: 'Dandi Wiratsangka'
})

export const metadata = {
  title: 'Dandi Wiratsangka',
  description: `Dandi Wiratsangka's personal website`,
  openGraph: {
    title: 'Dandi Wiratsangka' as any,
    type: 'website',
    url: 'https://dandiws.my.id',
    description: `Dandi Wiratsangka's personal website`,
    images: ogImageUrl
  },
  twitter: {
    images: ogImageUrl,
    card: 'summary_large_image',
    title: 'Dandi Wiratsangka',
    description: `Dandi Wiratsangka's personal website`,
    creator: '@dandews'
  }
}
