import clsx from 'clsx'
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
      {posts.map((post) => (
        <ArticleCard key={post.slug} post={post} />
      ))}
    </div>
  )
}

export default ArticleList
