import BlogPostLayout from 'layouts/blogpost'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import matter from 'gray-matter'
import { postFilePaths, POSTS_PATH } from 'utils/mdxUtils'
import remarkCodeTitle from 'remark-code-titles'
import rehypeMdxPrism from 'mdx-prism'
import readingTime from 'reading-time'
import { GetStaticProps } from 'next'
import { Post } from 'utils/types'
import { getOgImageUrl } from 'utils/og-image'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
import dayjs from 'dayjs'

export interface BlogPostProps {
  post: Post;
  readingTime: string;
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const BlogPost = ({ source, post, readingTime }: BlogPostProps) => {
  return (
    <BlogPostLayout {...post} readingTime={readingTime}>
      <NextSeo
        title={post.title} description={post.summary} openGraph={{
          title: post.title,
          description: post.summary,
          type: 'article',
          article: {
            publishedTime: dayjs(post.publishedAt).toISOString(),
            authors: ['https://github.com/dandiws']
          },
          images: [{
            url: post.ogImage
          }]
        }}
      />
      <Head>
        <title>{post.title} - Dandi Wiratsangka</title>
      </Head>
      <MDXRemote {...source} />
    </BlogPostLayout>
  )
}

export default BlogPost

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params
}) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const { content, data } = matter.read(postFilePath)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkCodeTitle],
      rehypePlugins: [rehypeMdxPrism]
    },
    scope: data
  })

  return {
    props: {
      source: mdxSource,
      post: {
        publishedAt: data.publishedAt,
        slug: params.slug as string,
        summary: data.summary,
        title: data.title,
        ogImage: getOgImageUrl(data as Post)
      },
      readingTime: readingTime(content).text
    }
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}
