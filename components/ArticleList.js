import clsx from 'clsx'
import ArticleCard from './ArticleCard'

const ArticleList = ({ posts }) => {
  return (
    <div className={clsx(
      'grid grid-cols-1 gap-6 md:gap-12',
      [posts.length >= 2 && 'lg:grid-cols-2'],
      [posts.length >= 3 && 'xl:grid-cols-3']
    )}
    >
      {posts.map((post, i) => (
        <ArticleCard key={i} post={post} />
      ))}
    </div>
  )
}

export default ArticleList
