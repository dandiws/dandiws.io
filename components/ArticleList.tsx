import clsx from 'clsx'
import { fadeUpVariant } from 'utils/motions'
import { Post } from 'utils/types'
import ArticleCard from './ArticleCard'

export interface ArticleListProps {
  posts: Post[];
}

const ArticleList = ({ posts }: ArticleListProps) => {
  return (
    <div
      className={clsx(
        'grid grid-cols-1 gap-6 md:gap-12',
        [posts.length >= 2 && 'lg:grid-cols-2'],
        [posts.length >= 3 && 'xl:grid-cols-3']
      )}
    >
      {posts.map((post, i) => {
        const duration = 0.4
        return (
          <ArticleCard
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration,
              delay: i * duration * 0.05
            }}
            viewport={{ once: true }}
            key={post.slug + i}
            post={post}
          />
        )
      })}
    </div>
  )
}

export default ArticleList
