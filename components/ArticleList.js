import { Grid } from '@chakra-ui/layout'
import ArticleCard from './ArticleCard'

const ArticleList = ({ posts, column = [1, 1, 2, 3] }) => {
  column = Array.isArray(column)
    ? column.map((col) => {
      col = posts.length > col ? col : posts.length
      return `repeat(${col}, 1fr)`
    })
    : column

  return (
    <Grid templateColumns={column} gap={[6, 12]}>
      {posts.map((post, i) => (
        <ArticleCard key={i} post={post} />
      ))}
    </Grid>
  )
}

export default ArticleList
