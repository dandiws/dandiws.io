import Head from 'next/head'
import { Box, Container, Heading } from '@chakra-ui/layout'

const GenericPageLayout = ({ title, children }) => {
  return (
    <Container maxW="container.md">
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
