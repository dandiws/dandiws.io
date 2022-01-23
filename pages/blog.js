import { VStack, Box, Heading, Text } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Input } from '@chakra-ui/input'
import Container from '../components/Container'
import { useCallback, useEffect, useState } from 'react'
import ArticleList from '../components/ArticleList'
import { getAllArticles } from 'utils/mdxUtils'
import Head from 'next/head'

const SearchInput = ({ searchQuery, onInputChange }) => {
  const inputBg = useColorModeValue('gray.100', 'dark.100')

  return (
    <Input
      value={searchQuery}
      onChange={onInputChange}
      placeholder="Search articles"
      bg={inputBg}
    />
  )
}

export default function Blog ({ articles }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredArticles, setFilteredArticles] = useState(() => articles)

  useEffect(() => {
    if (searchQuery === '') setFilteredArticles(() => articles)

    setFilteredArticles(() =>
      articles.filter((article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
      )
    )
  }, [searchQuery])

  const onInputChange = useCallback((e) => setSearchQuery(e.target.value), [
    setSearchQuery
  ])

  return (
    <Container>
      <Head>
        <title>Blog - Dandi Wiratsangka</title>
      </Head>
      <VStack spacing={10} align="start">
        <Box>
          <Heading as="h1" size="2xl" mb={3}>
            Blog
          </Heading>
          <Text maxW="lg" color="gray.500">
            Here you can find my articles about tutorials, tips & trick,
            opinion, etc. I hope it help you in any way. Thank you for reading
            :)
          </Text>
        </Box>
        <SearchInput searchQuery={searchQuery} onInputChange={onInputChange} />
        <Box>
          <Box textStyle="gray:sm" mb={3}>
            Showing {filteredArticles.length} of {articles.length} articles
          </Box>
          <ArticleList posts={filteredArticles} />
        </Box>
      </VStack>
    </Container>
  )
}

export const getStaticProps = () => {
  return {
    props: {
      articles: getAllArticles()
    }
  }
}
