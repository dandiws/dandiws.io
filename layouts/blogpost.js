import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import Head from 'next/head'
import Divider from '../components/Divider'
import Container from '../components/Container'
import Author from '../components/Author'

const BlogPost = ({ frontMatter, children }) => {
  return (
    <Container maxW="md">
      <Head>
        <title>{frontMatter.title} - Dandi Wiratsangka</title>
      </Head>
      <Flex
        alignItems="center"
        justify="center"
        direction="column"
        textAlign="center"
        py={16}
      >
        <Heading as="h1" fontSize={['2rem', '2.4rem', '3rem', '4rem']} mb={8}>
          {frontMatter.title}
        </Heading>
        <Box mb={10}>
          <Flex wrap="nowrap">
            <Text textStyle="postDetail">
              {frontMatter.published_at_formatted}
            </Text>
            <Divider mx={[1, 1, 3]} color="gray.700" />
            <Text textStyle="postDetail">{frontMatter.read_time.text}</Text>
            <Divider mx={[1, 1, 3]} color="gray.700" />
            <Text textStyle="postDetail">
              {Math.ceil(Math.random() * 9999)} views
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
