import { Post } from 'contentlayer/generated'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import Divider from './Divider'
import ViewCounter from './ViewCounter'

export interface ArticleCardProps {
  post: Post
}

const ArticleCard = ({ post, ...props }: ArticleCardProps) => {
  const publishedAt = dayjs(post.publishedAt).format('DD MMMM YYYY')

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="overflow-hidden bg-base-2 shadow-lg shadow-slate-300/10 transition-shadow duration-200 hover:ring-2 focus:ring-2 ring-offset-4 ring-offset-white dark:ring-offset-dark-200 ring-accent-light/50 focus:outline-none cursor-pointer rounded-md"
      {...props}>
      <Image
        width={468}
        height={263}
        src={post.image}
        className="object-cover w-full aspect-video"
        alt=""
        aria-hidden="true"
      />
      <div className="p-6">
        <div className="flex mb-2">
          <span className="postDetail">{publishedAt}</span>
          <Divider />
          <span className="postDetail">
            <ViewCounter slug={post.slug} readOnly />
          </span>
        </div>
        <div>
          <h2 className="mb-3 text-lg">{post.title}</h2>
          <p className="text-gray">{post.summary}</p>
        </div>
      </div>
    </Link>
  )
}

export default ArticleCard
