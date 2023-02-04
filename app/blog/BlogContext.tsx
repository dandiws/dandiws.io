'use client'

import { Post } from 'contentlayer/generated'
import { useSearchParams } from 'next/navigation'
import { createContext, PropsWithChildren, useContext } from 'react'

const BlogContext = createContext(null)

export function BlogProvider({
  children,
  articles
}: PropsWithChildren<{ articles: Post[] }>) {
  const params = useSearchParams()
  const searchTerm = params.get('search')
  const filteredArticles = searchTerm
    ? articles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
      )
    : articles

  return (
    <BlogContext.Provider value={{ articles: filteredArticles }}>
      {children}
    </BlogContext.Provider>
  )
}

export function useBlog() {
  const context = useContext(BlogContext)

  if (context === null) {
    throw new Error('`useBlog` should be used within `BlogProvider`')
  }

  return context
}
