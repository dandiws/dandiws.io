import BlogArticles from 'app/blog/BlogArticles'
import { allPosts } from 'contentlayer/generated'
import { BlogProvider } from './BlogContext'
import BlogSearch from './BlogSearch'

export default function Page() {
  return (
    <BlogProvider articles={allPosts}>
      <header className="my-12">
        <h1 className="text-4xl mb-3 leading-normal">Blog</h1>
        <p className="text-slate-500 max-w-lg">
          Here you can find my articles about tutorials, tips & trick, opinion,
          etc. I hope it help you in any way. Thank you for reading :)
        </p>
      </header>
      <BlogSearch />
      <BlogArticles />
    </BlogProvider>
  )
}
