import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { Post } from './types'

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'blog')
// export const PAGES_PATH = path.join(process.cwd(), 'pages')

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path))

// pageFilePaths is the list of all mdx files inside the PAGES_PATH directory
// export const pageFilePaths = fs
//   .readdirSync(PAGES_PATH)
//   .filter((path) => /\.mdx?$/.test(path))

export const getAllArticles = (): Post[] => {
  return postFilePaths
    .map((slugDotMdx) => [
      matter.read(path.join(POSTS_PATH, slugDotMdx)) as any,
      slugDotMdx
    ])
    .map(([matter, slugDotMdx]) => ({
      ...matter.data,
      slug: slugDotMdx.replace('.mdx', '')
    }))
    .sort((a, b) => b.publishedAt - a.publishedAt)
}

export const getLatestArticles = (n: number) => getAllArticles().slice(0, n)
