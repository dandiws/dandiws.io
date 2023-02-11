import { allPosts } from 'contentlayer/generated'

export async function getArticleBySlug(slug: string) {
  return allPosts.find((post) => post.slug === slug)
}
