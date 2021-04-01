import { frontMatter as articles } from '../pages/blog/**/*.mdx'

const sortByDate = articles ? articles.sort((a, b) => b.published_at - a.published_at) : []

export const latestArticles = sortByDate.slice(0, 3)

export default sortByDate
