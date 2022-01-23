import Head from 'next/head'
import { Box, Container, Heading } from '@chakra-ui/layout'
import { NextSeo } from 'next-seo'

const GenericPageLayout = ({ title, description, children }) => {
  return (
    <Container maxW="container.md">
      <NextSeo
        title={title}
        description={description}
      />
      <Head>
        <title>{title} - Dandi Wiratsangka</title>
      </Head>
      <Box mb={10}>
        <Heading as="h1" size="2xl">
          {title}
        </Heading>
      </Box>
      <Box mb={20}>{children}</Box>
    </Container>
  )
}

export default GenericPageLayout
