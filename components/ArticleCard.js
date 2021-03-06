import { Heading, Flex, Box, Text } from '@chakra-ui/layout'
import Link from 'next/link'
import Divider from './Divider'
import ViewCounter from './ViewCounter'

const ArticleCard = ({ post, ...props }) => {
  const slug = post.__resourcePath.replace('.mdx', '').replace('blog/', '')

  return (
    <Box {...props} rounded="md" py={3}>
      <Flex mb={2}>
        <Text textStyle="postDetail" as="span">
          {post.published_at_formatted}
        </Text>
        <Divider mx={4} color="gray.700" />
        <Text textStyle="postDetail" as="span">
          <ViewCounter slug={slug} readOnly />
        </Text>
      </Flex>
      <Box>
        <Link href={`/blog/${slug}`}>
          <Heading
            _hover={(theme) => ({
              cursor: 'pointer',
              color: theme.colors.accent,
              textDecoration: 'underline'
            })}
            as="h2"
            size="md"
            mb={3}
          >
            {post.title}
          </Heading>
        </Link>

        <Text color="gray.500">{post.summary}</Text>
      </Box>
    </Box>
  )
}

export default ArticleCard
