import Head from 'next/head'
import Divider from '../components/Divider'
import Container from '../components/Container'
import Author from '../components/Author'
import ViewCounter from '../components/ViewCounter'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import dayjs from 'dayjs'
import { NextSeo } from 'next-seo'

const BlogPost = ({
  title,
  publishedAt,
  summary,
  readingTime,
  slug,
  children
}) => {
  return (
    <Container maxW="container.md">
      <NextSeo
        title={title}
        description={summary}
      />
      <Head>
        <title>{title} - Dandi Wiratsangka</title>
      </Head>
      <Flex
        alignItems="center"
        justify="center"
        direction="column"
        textAlign="center"
        py={16}
      >
        <Heading as="h1" fontSize={['2rem', '2.4rem', '3rem', '4rem']} mb={8}>
          {title}
        </Heading>
        <Box mb={10}>
          <Flex wrap="nowrap">
            <Text textStyle="postDetail">
              {dayjs(publishedAt).format('DD MMMM YYYY')}
            </Text>
            <Divider mx={[1, 1, 3]} color="gray.700" />
            <Text textStyle="postDetail">{readingTime}</Text>
            <Divider mx={[1, 1, 3]} color="gray.700" />
            <Text textStyle="postDetail">
              <ViewCounter slug={slug} />
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Box mb={20} as="main">{children}</Box>
      <Author />
    </Container>
  )
}

export default BlogPost
