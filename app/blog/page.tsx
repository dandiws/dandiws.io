import ArticleList from 'components/ArticleList'
import { allPosts } from 'contentlayer/generated'
import { createOgImageUrl } from 'utils/og'
import BlogSearch from './BlogSearch'

export default function Page({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const filteredPosts = searchParams.search
    ? allPosts.filter((post) =>
        post.title.toLowerCase().includes(searchParams.search.toString())
      )
    : allPosts

  return (
    <>
      <header className="my-12">
        <h1 className="text-4xl mb-3 leading-normal">Blog</h1>
        <p className="text-slate-500 max-w-lg">
          Here you can find my articles about tutorials, tips & trick, opinion,
          etc. I hope it help you in any way. Thank you for reading :)
        </p>
      </header>
      <BlogSearch
        shownCount={filteredPosts.length}
        totalCount={allPosts.length}
      />
      <ArticleList posts={filteredPosts} />
    </>
  )
}

const ogImageUrl = createOgImageUrl({
  background: 'https://images.unsplash.com/photo-1552688468-d87e6f7a58f2',
  title: 'Blog'
})

export const metadata = {
  title: 'Blog - Dandi Wiratsangka',
  description:
    'Here you can find my articles about tutorials, tips & trick, opinion, etc. I hope it help you in any way. Thank you for reading :)',
  openGraph: {
    images: ogImageUrl
  },
  twitter: {
    images: ogImageUrl,
    card: 'summary_large_image'
  }
}
