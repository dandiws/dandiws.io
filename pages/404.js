import { Flex, Heading, Link, Divider, Box, Text } from '@chakra-ui/layout'
import Container from '../components/Container'
import NextLink from 'next/link'
import ArticleList from '../components/ArticleList'
import { getLatestArticles } from '../utils/mdxUtils'
import { useColorModeValue } from '@chakra-ui/color-mode'
import Head from 'next/head'

const NotFound = ({ latestArticles }) => {
  const dividerColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  return (
    <Container>
      <Head>
        <title>404 - Dandi Wiratsangka</title>
      </Head>
      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
      >
        <Heading as="h1" fontSize="9rem">
          404
        </Heading>
        <Heading as="h2" size="2xl" mb={6}>
          Page Not Found
        </Heading>
        <Text color="gray.500">
          The page you're looking for doesn't exist. Meanwhile, take a look at
          the latest posts or back to{' '}
          <NextLink href="/">
            <Link textStyle="postDetail">Home</Link>
          </NextLink>
          .
        </Text>
      </Flex>
      <Divider my={16} borderColor={dividerColor} />
      <Box>
        <Heading as="h2" size="lg" mb={5}>
          Latest Articles
        </Heading>
        <ArticleList posts={latestArticles} />
      </Box>
    </Container>
  )
}

export default NotFound

export const getStaticProps = () => {
  return {
    props: {
      latestArticles: getLatestArticles(4)
    }
  }
}
