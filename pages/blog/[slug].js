import Head from 'next/head'
import Divider from '../../components/Divider'
import Container from '../../components/Container'
import Author from '../../components/Author'
import ViewCounter from '../../components/ViewCounter'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import path from 'path'
import matter from 'gray-matter'
import { postFilePaths, POSTS_PATH } from 'utils/mdxUtils'
import remarkCodeTitle from 'remark-code-titles'
import rehypeMdxPrism from 'mdx-prism'
import readingTime from 'reading-time'
import dayjs from 'dayjs'

const BlogPost = ({ frontMatter: post, source, slug, readingTime }) => {
  const publishedAt = post.published_at && dayjs(post.published_at).format('DD MMMM YYYY')

  return (
    <Container maxW="container.md">
      <Head>
        <title>{post.title} - Dandi Wiratsangka</title>
      </Head>
      <Flex
        alignItems="center"
        justify="center"
        direction="column"
        textAlign="center"
        py={16}
      >
        <Heading as="h1" fontSize={['2rem', '2.4rem', '3rem', '4rem']} mb={8}>
          {post.title}
        </Heading>
        <Box mb={10}>
          <Flex wrap="nowrap">
            <Text textStyle="postDetail">
              {publishedAt}
            </Text>
            <Divider mx={[1, 1, 3]} color="gray.700" />
            <Text textStyle="postDetail">{readingTime.text}</Text>
            <Divider mx={[1, 1, 3]} color="gray.700" />
            <Text textStyle="postDetail">
              <ViewCounter slug={slug} />
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Box mb={20} as="main">
        <MDXRemote {...source} />
      </Box>
      <Author />
    </Container>
  )
}

export default BlogPost

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const { content, data } = matter.read(postFilePath)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
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

  console.log(postFilePaths)

  return {
    paths,
    fallback: false
  }
}
