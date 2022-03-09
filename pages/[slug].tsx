import path from 'path'
import GenericPageLayout from 'layouts/generic'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { pageFilePaths, PAGES_PATH } from 'utils/mdxUtils'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import remarkCodeTitles from 'remark-code-titles'
import rehypeMdxPrism from 'mdx-prism'
import { GetStaticPaths, GetStaticProps } from 'next'
import { createOgImageUrl } from 'utils/og-image'
import { NextSeo } from 'next-seo'

export interface MdxLayoutProps {
  frontMatter: { [x: string]: any };
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

export const MdxLayout = ({ frontMatter, source }: MdxLayoutProps) => {
  return (
    <GenericPageLayout title={frontMatter.title}>
      <NextSeo openGraph={{
        images: [{
          url: createOgImageUrl(frontMatter.title)
        }]
      }}
      />
      <MDXRemote {...source} />
    </GenericPageLayout>
  )
}

export default MdxLayout

export const getStaticProps: GetStaticProps<MdxLayoutProps> = async ({
  params
}) => {
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

export const getStaticPaths: GetStaticPaths = async () => {
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
