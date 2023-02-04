import Author from 'components/Author'
import Divider from 'components/Divider'
import Mdx from 'components/Mdx'
import ViewCounter from 'components/ViewCounter'
import { allPosts } from 'contentlayer/generated'
import dayjs from 'dayjs'
import { notFound } from 'next/navigation'

async function getArticleBySlug(slug: string) {
  return allPosts.find((post) => post.slug === slug)
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getArticleBySlug(params.slug)
  if (!post) {
    return notFound()
  }

  return (
    <div className="mx-auto px-8 max-w-screen-md">
      <div className="flex items-center justify-center flex-col text-center py-16">
        <h1 className="mb-8 font-bold text-2xl md:text-4xl lg:text-4xl">
          {post.title}
        </h1>
        <div className="mb-10">
          <div className="flex flex-nowrap">
            <span className="postDetail">
              {dayjs(post.publishedAt).format('DD MMMM YYYY')}
            </span>
            <Divider className="mx-2 md:mx-3" />
            <span className="postDetail">{post.readingTime.words}</span>
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
