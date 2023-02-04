'use client'

import ArticleList from 'components/ArticleList'
import { useBlog } from './BlogContext'

export default function BlogArticles() {
  const { articles } = useBlog()
  return <ArticleList posts={articles} />
}
