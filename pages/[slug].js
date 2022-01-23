import path from 'path'
import GenericPageLayout from 'layouts'
import { MDXRemote } from 'next-mdx-remote'
import { pageFilePaths, PAGES_PATH } from 'utils/mdxUtils'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import remarkCodeTitles from 'remark-code-titles'
import rehypeMdxPrism from 'mdx-prism'

export const MdxLayout = ({ frontMatter, source }) => {
  return (
    <GenericPageLayout title={frontMatter.title}>
      <MDXRemote {...source} />
    </GenericPageLayout>
  )
}

export default MdxLayout

export const getStaticProps = async ({ params }) => {
  const slug = params.slug
  const pagePath = path.join(PAGES_PATH, `${slug}.mdx`)

  const { content, data } = matter.read(pagePath)
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkCodeTitles],
      rehypePlugins: [rehypeMdxPrism]
    },
    scope: data
  })

  return {
    props: {
      frontMatter: data,
      source: mdxSource
    }
  }
}

export const getStaticPaths = async () => {
  const paths = pageFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}
