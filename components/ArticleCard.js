import dayjs from 'dayjs'
import Link from 'next/link'
import Divider from './Divider'
import ViewCounter from './ViewCounter'

const ArticleCard = ({ post, ...props }) => {
  const publishedAt =
    post.published_at && dayjs(post.published_at).format('DD MMMM YYYY')

  return (
    <div {...props} className="py-6">
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
        <Link href={`/blog/${post.slug}`}>
          <h2 className="cursor-pointer hover:text-accent-400 hover:underline mb-3 text-lg font-medium">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray">{post.summary}</p>
      </div>
    </div>
  )
}

export default ArticleCard
