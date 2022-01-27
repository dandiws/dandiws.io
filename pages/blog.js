import Container from '../components/Container'
import { useCallback, useEffect, useState } from 'react'
import ArticleList from '../components/ArticleList'
import { getAllArticles } from 'utils/mdxUtils'
import Head from 'next/head'

export default function Blog ({ articles }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredArticles, setFilteredArticles] = useState(() => articles)

  useEffect(() => {
    if (searchQuery === '') setFilteredArticles(() => articles)

    setFilteredArticles(() =>
      articles.filter((article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
      )
    )
  }, [searchQuery])

  const onInputChange = useCallback((e) => setSearchQuery(e.target.value), [
    setSearchQuery
  ])

  return (
    <Container>
      <Head>
        <title>Blog - Dandi Wiratsangka</title>
      </Head>
      <div className="space-y-10">
        <header>
          <h1 className="text-5xl mb-3">
            Blog
          </h1>
          <p className="text-gray max-w-lg">
            Here you can find my articles about tutorials, tips & trick,
            opinion, etc. I hope it help you in any way. Thank you for reading
            :)
          </p>
          <input className="mt-8 px-3 py-2 w-full rounded-md bg-gray-100 dark:bg-dark-100 outline-none focus:ring" type="search" placeholder="Search articles..." value={searchQuery} onChange={onInputChange} />
        </header>
        <main>
          <div className="text-sm text-gray mb-3">
            Showing {filteredArticles.length} of {articles.length} articles
          </div>
          <ArticleList posts={filteredArticles} />
        </main>
      </div>
    </Container>
  )
}

export const getStaticProps = () => {
  return {
    props: {
      articles: getAllArticles()
    }
  }
}
