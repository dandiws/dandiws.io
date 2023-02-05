'use client'

import ArticleList from 'components/ArticleList'
import { useBlog } from './BlogContext'

export default function BlogArticles() {
  const { filteredArticles } = useBlog()
  return <ArticleList posts={filteredArticles} />
}
