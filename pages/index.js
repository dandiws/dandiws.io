import Head from 'next/head'
import Container from 'components/Container'
import ArticleList from 'components/ArticleList'
import NextLink from 'next/link'
import { latestArticles } from 'utils/articles'
import ProjectList from 'components/ProjectList'
import projects from 'utils/projects'
import { Box, Flex, Heading, Link, Text, VStack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import ExternalLink from 'components/ExternalLink'
import { useColorModeValue } from '@chakra-ui/react'

export default function Home () {
  const btnBgc = useColorModeValue('gray.100', 'dark.100')
  return (
    <Container>
      <Head>
        <title>Dandi Wiratsangka</title>
      </Head>
      <VStack spacing={40} align="start">
        <Box as="header" textAlign="left" py={16}>
          <Heading as="h1" fontSize={['3.25rem', '5rem']} mb={3}>
            Hello, I'm Dandi Wiratsangka
          </Heading>
          <Box color="gray.500">
            <Text>
              I'm a software engineer at <ExternalLink href="https://glair.ai">glair</ExternalLink>.
            </Text>
            <Text>This is where i write articles about anything that might help someone. Hope you enjoy!</Text>
          </Box>
        </Box>
        <Box as="section" width="100%">
          <Heading as="h2" mb={8} size="lg" className="section-title">
            Latest Articles
          </Heading>
          <ArticleList posts={latestArticles} />
          <Flex justify="center" mt={8}>
            <Link as={NextLink} href="/blog">
              <Button as="a" cursor="pointer" bg={btnBgc} fontWeight={400} fontSize="0.85rem">
                Browse more
              </Button>
            </Link>
          </Flex>
        </Box>
        <Box as="section">
          <Heading as="h2" mb={12} size="lg" className="section-title">
            Projects
          </Heading>
          <ProjectList projects={projects} />
        </Box>
      </VStack>
    </Container>
  )
}
