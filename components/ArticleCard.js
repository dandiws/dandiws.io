import { Box, Heading, Text, theme, useColorMode } from '@chakra-ui/core'
import styled from '@emotion/styled'
import Link from 'next/link'

const ArticleCardWrapper = styled(Box)`
  &:hover {
    cursor: pointer;
    color: ${({ colormode }) =>
      colormode == 'light'
        ? theme.colors.purple[500]
        : theme.colors.yellow[400]};
    background-color: ${({ colormode }) =>
      colormode == 'light' ? theme.colors.gray[200] : theme.colors.gray[900]};
  }
`
const ArticleCard = ({ href, title, children, ...props }) => {
  const { colorMode } = useColorMode()

  return (
    <Link href={href}>
      <ArticleCardWrapper
        {...props}
        rounded="md"
        py={3}
        px={5}
        mx={-5}
        colormode={colorMode}
      >
        <Heading as="h2" size="md" mb={1}>
          {title}
        </Heading>
        <Text color="gray.500">{children}</Text>
      </ArticleCardWrapper>
    </Link>
  )
}

export default ArticleCard
