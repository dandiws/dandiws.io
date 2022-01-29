import Head from 'next/head'
import Divider from '../components/Divider'
import Author from '../components/Author'
import ViewCounter from '../components/ViewCounter'
import dayjs from 'dayjs'
import { NextSeo } from 'next-seo'
import { ReactNode } from 'react'

export interface BlogPostProps {
  title: string;
  publishedAt: string;
  summary: string;
  readingTime: string;
  slug: string;
  children: ReactNode;
}

const BlogPost = ({
  title,
  publishedAt,
  summary,
  readingTime,
  slug,
  children
}: BlogPostProps) => {
  return (
    <div className="mx-auto px-8 max-w-screen-md">
      <NextSeo title={title} description={summary} />
      <Head>
        <title>{title} - Dandi Wiratsangka</title>
      </Head>
      <div className="flex items-center justify-center flex-col text-center py-16">
        <h1 className="mb-8 font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          {title}
        </h1>
        <div className="mb-10">
          <div className="flex flex-nowrap">
            <span className="postDetail">
              {dayjs(publishedAt).format('DD MMMM YYYY')}
            </span>
            <Divider className="mx-2 md:mx-3" />
            <span className="postDetail">{readingTime}</span>
            <Divider className="mx-2 md:mx-3" />
            <span className="postDetail">
              <ViewCounter slug={slug} />
            </span>
          </div>
        </div>
      </div>
      <article className="mb-20">{children}</article>
      <Author />
    </div>
  )
}

export default BlogPost
