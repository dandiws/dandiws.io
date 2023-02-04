import BlogArticles from 'app/blog/BlogArticles'
import { getAllArticles } from 'utils/mdxUtils'
import { BlogProvider } from './BlogContext'
import BlogSearch from './BlogSearch'

export default function Page() {
  const articles = getAllArticles()

  return (
    <BlogProvider articles={articles}>
      <header className="py-12">
        <h1 className="text-4xl mb-3 leading-normal">Blog</h1>
        <p className="text-gray max-w-lg">
          Here you can find my articles about tutorials, tips & trick, opinion,
          etc. I hope it help you in any way. Thank you for reading :)
        </p>
        <BlogSearch />
      </header>
      <div className="text-sm text-gray mb-3">
        Showing {articles.length} of {articles.length} articles
      </div>
      <BlogArticles />
    </BlogProvider>
  )
}
