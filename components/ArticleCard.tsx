import dayjs from 'dayjs'
import Link from 'next/link'
import { Post } from 'utils/types'
import Divider from './Divider'
import ViewCounter from './ViewCounter'

export interface ArticleCardProps {
  post: Post,
}

const ArticleCard = ({ post }: ArticleCardProps) => {
  const publishedAt = dayjs(post.publishedAt).format('DD MMMM YYYY')

  return (
    <div className="py-6">
      <div className="flex mb-2">
        <span className="postDetail">
          {publishedAt}
        </span>
        <Divider mx={4} color="gray.700" />
        <span className="postDetail">
          <ViewCounter slug={post.slug} readOnly />
        </span>
      </div>
      <div>

        <h2 className="cursor-pointer hover:text-accent-400 hover:underline mb-3 text-lg font-medium">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        <p className="text-gray">{post.summary}</p>
      </div>
    </div>
  )
}

export default ArticleCard
