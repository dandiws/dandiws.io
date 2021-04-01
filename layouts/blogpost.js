import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import Head from 'next/head'
import Divider from '../components/Divider'
import Container from '../components/Container'
import Author from '../components/Author'
import ViewCounter from '../components/ViewCounter'

const BlogPost = ({ frontMatter: post, children }) => {
  const slug = post.__resourcePath.replace('.mdx', '').replace('blog/','')

  return (
    <Container maxW="md">
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
              {post.published_at_formatted}
            </Text>
            <Divider mx={[1, 1, 3]} color="gray.700" />
            <Text textStyle="postDetail">{post.read_time.text}</Text>
            <Divider mx={[1, 1, 3]} color="gray.700" />            
            <Text textStyle="postDetail">
              <ViewCounter slug={slug} />
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Box mb={20}>{children}</Box>
      <Author />
    </Container>
  )
}

export default BlogPost
