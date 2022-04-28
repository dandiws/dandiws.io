import dayjs from 'dayjs'
import { HTMLMotionProps, m } from 'framer-motion'
import Link from 'next/link'
import { Post } from 'utils/types'
import Divider from './Divider'
import ViewCounter from './ViewCounter'

export interface ArticleCardProps {
  post: Post,
}

const ArticleCard = ({ post, ...props }: ArticleCardProps & HTMLMotionProps<'div'>) => {
  const publishedAt = dayjs(post.publishedAt).format('DD MMMM YYYY')

  return (
    <m.div className="py-6" {...props}>
      <div className="flex mb-2">
        <span className="postDetail">
          {publishedAt}
        </span>
        <Divider />
        <span className="postDetail">
          <ViewCounter slug={post.slug} readOnly />
        </span>
      </div>
      <div>

        <h2 className="cursor-pointer hover:text-accent hover:underline mb-3 text-xl">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
        <p className="text-gray">{post.summary}</p>
      </div>
    </m.div>
  )
}

export default ArticleCard
