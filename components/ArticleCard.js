import { Heading, Flex, Box, Text } from '@chakra-ui/layout'
import dayjs from 'dayjs'
import Link from 'next/link'
import Divider from './Divider'
import ViewCounter from './ViewCounter'

const ArticleCard = ({ post, ...props }) => {
  const publishedAt = post.published_at && dayjs(post.published_at).format('DD MMMM YYYY')

  return (
    <Box {...props} rounded="md" py={3}>
      <Flex mb={2}>
        <Text textStyle="postDetail" as="span">
          {publishedAt}
        </Text>
        <Divider mx={4} color="gray.700" />
        <Text textStyle="postDetail" as="span">
          <ViewCounter slug={post.slug} readOnly />
        </Text>
      </Flex>
      <Box>
        <Link href={`/blog/${post.slug}`}>
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
