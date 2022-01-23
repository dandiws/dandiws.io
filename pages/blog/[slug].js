import BlogPostLayout from 'layouts/blogpost'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import matter from 'gray-matter'
import { postFilePaths, POSTS_PATH } from 'utils/mdxUtils'
import remarkCodeTitle from 'remark-code-titles'
import rehypeMdxPrism from 'mdx-prism'
import readingTime from 'reading-time'

const BlogPost = ({ frontMatter, source, slug, readingTime }) => {
  return (
    <BlogPostLayout
      publishedAt={frontMatter.published_at}
      title={frontMatter.title}
      readingTime={readingTime.text}
      slug={slug}
      summary={frontMatter.summary}
    >
      <MDXRemote {...source} />
    </BlogPostLayout>
  )
}

export default BlogPost

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const { content, data } = matter.read(postFilePath)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkCodeTitle],
      rehypePlugins: [rehypeMdxPrism]
    },
    scope: data
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      slug: params.slug,
      readingTime: readingTime(content)
    }
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}
