import Author from 'components/Author'
import Divider from 'components/Divider'
import Mdx from 'components/Mdx'
import ViewCounter from 'components/ViewCounter'
import { allPosts } from 'contentlayer/generated'
import dayjs from 'dayjs'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Balancer from 'react-wrap-balancer'
import { getArticleBySlug } from './util'

type WithParams = { params: { slug: string } }

export default async function Page({ params }: WithParams) {
  const post = await getArticleBySlug(params.slug)
  if (!post) {
    return notFound()
  }

  return (
    <div className="max-w-screen-md mx-auto">
      <div className="flex items-center justify-center flex-col text-center py-16">
        <h1 className="mb-8 font-bold text-2xl md:text-4xl lg:text-4xl">
          <Balancer>{post.title}</Balancer>
        </h1>
        <div className="mb-10">
          <div className="flex flex-nowrap">
            <span className="postDetail">
              {dayjs(post.publishedAt).format('DD MMMM YYYY')}
            </span>
            <Divider className="mx-2 md:mx-3" />
            <span className="postDetail">{post.readingTime}</span>
            <Divider className="mx-2 md:mx-3" />
            <span className="postDetail">
              <ViewCounter slug={params.slug} />
            </span>
          </div>
        </div>
      </div>
      <Mdx code={post.body.code} />
      <div className="my-16" />
      <Author />
    </div>
  )
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug
  }))
}

export async function generateMetadata({
  params
}: WithParams): Promise<Metadata> {
  const post = await getArticleBySlug(params.slug)
  const ogImage = `https://dandiws.my.id/api/og?slug=${params.slug}`

  return {
    title: post.title,
    description: post.summary,
    twitter: {
      title: post.title,
      card: 'summary_large_image',
      creator: '@dandews',
      description: post.summary,
      images: ogImage
    },
    openGraph: {
      title: {
        absolute: post.title
      },
      description: post.summary,
      publishedTime: post.publishedAt,
      type: 'article',
      url: `https://dandiws.my.id/blog/${params.slug}`,
      images: [
        {
          url: ogImage
        }
      ]
    }
  }
}
