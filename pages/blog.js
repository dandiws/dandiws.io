import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Input,
  StackItem,
  Text,
  theme,
  useColorMode,
  VStack,
} from '@chakra-ui/core'
import ArticleCard from '../components/ArticleCard'
import Search from '../components/icons/Search'

const searchBg = {
  light: theme.colors.gray[200],
  dark: theme.colors.gray[900],
}

export default function Blog() {
  const { colorMode } = useColorMode()
  return (
    <Container maxW="md" py={10}>
      <VStack spacing={8} align="start">
        <StackItem w="full">
          <Heading as="h1" size="2xl" mb={3}>
            Blog
          </Heading>
          <Text color="gray.500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto saepe
            dignissimos molestiae, natus veritatis quas vitae quos asperiores
            voluptate odit sequi vero aspernatur quo laudantium voluptatibus sit
            rerum blanditiis repudiandae?
          </Text>
        </StackItem>
        <StackItem w="full">
          <Flex>
            <Input placeholder="Search articles" bg={searchBg[colorMode]} />
            <IconButton ml={3} icon={<Search />} />
          </Flex>
        </StackItem>
        <StackItem w="full">
          <Box>
            <Text as="span" fontSize="sm" color="gray.500">
              Showing 8 of 65 articles
            </Text>
          </Box>
        </StackItem>
        <StackItem>
          <ArticleCard
            href="/blog/hello-world"
            title="Everything I learn From Making This Website"
          >
            Amet consectetur adipisicing elit. Ea obcaecati expedita illum
            itaque doloremque ab, quod dolor ipsa dignissimos sequi blanditiis
            voluptas tempora ipsam dolorem porro minima perspiciatis eum eos?
          </ArticleCard>
          <ArticleCard
            href="/blog/hello-world"
            title="React.JS Easy Step by Step"
          >
            Consectetur adipisicing elit. Ea obcaecati expedita illum itaque
            doloremque ab, quod dolor ipsa dignissimos sequi blanditiis voluptas
            tempora ipsam dolorem porro minima perspiciatis eum eos?
          </ArticleCard>
          <ArticleCard
            href="/blog/hello-world"
            title="Make Cool Syntax Highlighting In ReactJS App"
          >
            Ea obcaecati expedita illum itaque doloremque ab, quod dolor ipsa
            dignissimos sequi blanditiis voluptas tempora ipsam dolorem porro
            minima perspiciatis eum eos?
          </ArticleCard>
        </StackItem>
      </VStack>
    </Container>
  )
}
