import { Post } from 'contentlayer/generated'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import Divider from './Divider'
import ViewCounter from './ViewCounter'

export interface ArticleCardProps {
  post: Post
  cover?: boolean
}

const ArticleCard = ({ post, cover, ...props }: ArticleCardProps) => {
  const publishedAt = dayjs(post.publishedAt).format('DD MMMM YYYY')

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="focus:outline-none hover:opacity-60 ring-offset-4 ring-offset-slate-50 dark:ring-offset-dark-200 cursor-pointer rounded-md"
      {...props}>
      {!!cover && (
        <div className="p-px bg-gradient-radial-to-br from-transparent to-transparent dark:from-gray-700 dark:to-dark-100 rounded-lg mb-6">
          <Image
            width={468}
            height={263}
            src={post.image}
            className="object-cover w-full aspect-video rounded-lg "
            alt=""
            aria-hidden="true"
          />
        </div>
      )}

      <div className="space-y-3">
        <h2 className="text-xl">{post.title}</h2>
        <div className="flex text-sm font-mono text-gray">
          <span>{publishedAt}</span>
          <Divider />
          <span>
            <ViewCounter slug={post.slug} readOnly />
          </span>
        </div>
        <p className="text-gray">{post.summary}</p>
      </div>
    </Link>
  )
}

export default ArticleCard
