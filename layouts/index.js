import { Box, Container, Flex, Heading, Text } from '@chakra-ui/core'
import Head from 'next/head'

import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

const MdxLayout = ({ frontMatter, children }) => {
  return (
    <Container maxW="md">
      <Head>
        <title>{frontMatter.title} - Dandi Wiratsangka</title>
      </Head>
      <Box mb={10}>
        <Heading as="h1" size="2xl">
          {frontMatter.title}
        </Heading>
      </Box>
      <Box mb={20}>{children}</Box>
    </Container>
  )
}

export default MdxLayout
