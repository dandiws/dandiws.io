import clsx from 'clsx'
import { Post } from 'utils/types'
import ArticleCard from './ArticleCard'

export interface ArticleListProps {
  posts: Post[]
}

const ArticleList = ({ posts }: ArticleListProps) => {
  return (
    <div
      className={clsx('grid grid-cols-1 md:grid-cols-2 gap-6', [
        posts.length >= 3 && 'xl:grid-cols-3'
      ])}>
      {posts.map((post, i) => {
        return <ArticleCard key={post.slug + i} post={post} />
      })}
    </div>
  )
}

export default ArticleList
