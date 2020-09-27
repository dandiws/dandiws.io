import { Box, Container, Divider, Flex, Heading, Text } from '@chakra-ui/core'
import Head from 'next/head'

const BlogPost = ({ title, published_at, children }) => {
  return (
    <Container maxW="md">
      <Head>
        <title>{title} - Dandi Wiratsangka</title>
      </Head>
      <Heading as="h1" size="xl" mb={3}>
        {title}
      </Heading>
      <Box mb={10}>
        <Flex>
          <Text as="span" color="gray.500">
            {published_at}
          </Text>
          <Divider orientation="vertical" mx={3} />
          <Text as="span" color="gray.500">
            7 min read
          </Text>
        </Flex>
      </Box>
      <Box mb={20}>{children}</Box>
    </Container>
  )
}

export default BlogPost
