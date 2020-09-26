import { Box, Heading, Text, theme, useColorMode } from '@chakra-ui/core'
import styled from '@emotion/styled'

const ArticleCardWrapper = styled(Box)`
  &:hover {
    cursor: pointer;
    color: ${({ colorMode }) =>
      colorMode == 'light'
        ? theme.colors.purple[500]
        : theme.colors.yellow[400]};
    background-color: ${({ colorMode }) =>
      colorMode == 'light' ? theme.colors.gray[200] : theme.colors.gray[900]};
  }
`
const ArticleCard = ({ title, children, ...props }) => {
  const { colorMode } = useColorMode()

  return (
    <ArticleCardWrapper
      {...props}
      rounded="md"
      py={3}
      px={5}
      mx={-5}
      colorMode={colorMode}
    >
      <Heading as="h2" size="md" mb={1}>
        {title}
      </Heading>
      <Text color="gray.500">{children}</Text>
    </ArticleCardWrapper>
  )
}

export default ArticleCard
