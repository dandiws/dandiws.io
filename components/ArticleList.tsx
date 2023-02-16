import clsx from 'clsx'
import { Post } from 'contentlayer/generated'
import ArticleCard from './ArticleCard'

export interface ArticleListProps {
  posts: Post[]
  cover?: boolean
}

const ArticleList = ({ posts, cover }: ArticleListProps) => {
  return (
    <div
      className={clsx('grid grid-cols-1 md:grid-cols-2 gap-12', [
        posts.length >= 3 && 'xl:grid-cols-3'
      ])}>
      {posts.map((post, i) => {
        return <ArticleCard key={post.slug + i} post={post} cover={cover} />
      })}
    </div>
  )
}

export default ArticleList
