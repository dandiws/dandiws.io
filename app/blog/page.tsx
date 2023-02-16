import ArticleList from 'components/ArticleList'
import { allPosts } from 'contentlayer/generated'
import Balancer from 'react-wrap-balancer'
import { createOgImageUrl } from 'utils/og'
import BlogSearch from './BlogSearch'

export const dynamic = 'force-dynamic'

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
      <header className="mt-12 mb-32">
        <h1 className="text-4xl mb-3 leading-normal">Blog</h1>
        <p className="text-gray max-w-screen-md text-lg">
          <Balancer>
            Here you can find my articles about tutorials, tips & trick,
            opinion, etc. I hope it help you in any way. Thank you for reading.
          </Balancer>
        </p>
      </header>
      <BlogSearch
        shownCount={filteredPosts.length}
        totalCount={allPosts.length}
      />
      <ArticleList posts={filteredPosts} cover />
    </>
  )
}

const ogImageUrl = createOgImageUrl({
  background: '/images/space.jpeg',
  title: 'Blog'
})

export const metadata = {
  title: 'Blog - Dandi Wiratsangka',
  description:
    'Here you can find my articles about tutorials, tips & trick, opinion, etc. I hope it help you in any way. Thank you for reading :)',
  openGraph: {
    title: 'Blog - Dandi Wiratsangka' as any,
    description:
      'Here you can find my articles about tutorials, tips & trick, opinion, etc. I hope it help you in any way. Thank you for reading :)',
    images: ogImageUrl,
    type: 'website'
  },
  twitter: {
    title: 'Blog - Dandi Wiratsangka',
    description:
      'Here you can find my articles about tutorials, tips & trick, opinion, etc. I hope it help you in any way. Thank you for reading :)',
    images: ogImageUrl,
    card: 'summary_large_image'
  }
}
