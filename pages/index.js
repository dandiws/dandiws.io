import Head from 'next/head'
import { Box, Heading, Text, VStack, Flex, Button, Link } from '@chakra-ui/core'
import Container from '../components/Container'
import ArticleList from '../components/ArticleList'
import NextLink from 'next/link'
import { latestArticles } from '../utils/articles'
import ProjectList from '../components/ProjectList'
import projects from '../utils/projects'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Dandi Wiratsangka</title>
      </Head>
      <VStack spacing={32} align="start">
        <Box textAlign="center" py={16}>
          <Heading as="h1" fontSize={['2.6rem', '4rem']} mb={3}>
            Hello, I'm Dandi
          </Heading>
          <Box px={[0, 16]}>
            <Text color="gray.500">
              I'm a developer and movie lover🎬. I work at ⓂMechlab as Backend
              Engineer. This is where i write articles about anything that might
              help someone. Hope you enjoy!
            </Text>
          </Box>
        </Box>
        <Box>
          <Heading as="h2" mb={5} size="lg">
            Latest Articles
          </Heading>
          <ArticleList posts={latestArticles} />
          <Flex justify="center" mt={8}>
            <Link as={NextLink} href="/blog">
              <Button as="a" cursor="pointer">
                Browse more
              </Button>
            </Link>
          </Flex>
        </Box>
        <Box>
          <Heading as="h2" mb={12} size="lg">
            Projects
          </Heading>
          <ProjectList projects={projects} />
        </Box>
      </VStack>
    </Container>
  )
}
