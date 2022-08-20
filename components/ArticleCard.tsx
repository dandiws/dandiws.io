import dayjs from 'dayjs'
import { HTMLMotionProps, m } from 'framer-motion'
import Link from 'next/link'
import { Post } from 'utils/types'
import Divider from './Divider'
import ViewCounter from './ViewCounter'

export interface ArticleCardProps {
  post: Post
}

const ArticleCard = ({
  post,
  ...props
}: ArticleCardProps & HTMLMotionProps<'a'>) => {
  const publishedAt = dayjs(post.publishedAt).format('DD MMMM YYYY')

  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <m.a
        className="p-6 bg-base-2 transition-shadow duration-200 hover:ring-2 focus:ring-2 ring-offset-4 ring-offset-white dark:ring-offset-dark-200 ring-accent-light/50 focus:outline-none cursor-pointer rounded-md"
        {...props}
      >

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
      </m.a>
    </Link>
  )
}

export default ArticleCard
