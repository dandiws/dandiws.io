import Container from '../components/Container'
import NextLink from 'next/link'
import ArticleList from '../components/ArticleList'
import { getLatestArticles } from '../utils/mdxUtils'
import Head from 'next/head'
import { Post } from 'utils/types'
import { GetStaticProps } from 'next'
import { createOgImageUrl } from 'utils/og-image'
import { NextSeo } from 'next-seo'

export interface NotFoundProps {
  suggestesArticles: Post[]
}

const NotFound = ({ suggestesArticles: latestArticles }: NotFoundProps) => {
  return (
    <Container>
      <NextSeo
        title="404 - Dandi Wiratsangka"
        description="The page you're looking is not found"
        openGraph={{
          images: [{
            url: createOgImageUrl('404', undefined, 200)
          }]
        }}
      />
      <Head>
        <title>404 - Dandi Wiratsangka</title>
      </Head>
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-[9rem] font-bold leading-tight">404</h1>
        <h2 className="mb-6 font-bold text-5xl">Page Not Found</h2>
        <p className="text-gray">
          The page you're looking for doesn't exist. Meanwhile, take a look at
          the latest posts or back to{' '}
          <NextLink href="/">
            <span className="cursor-pointer postDetail">Home</span>
          </NextLink>
          .
        </p>
      </div>
      <div className="h-px w-full bg-gray-200 dark:bg-gray-800 my-16" />
      <div>
        <h2 className="mb-5 text-2xl">Latest Articles</h2>
        <ArticleList posts={latestArticles} />
      </div>
    </Container>
  )
}

export default NotFound

export const getStaticProps: GetStaticProps<NotFoundProps> = () => {
  return {
    props: {
      suggestesArticles: getLatestArticles(4)
    }
  }
}
