import { Box, Container, Heading, Text, VStack } from '@chakra-ui/core'
import ArticleCard from '../components/ArticleCard'

export default function Home() {
  return (
    <Container maxW="md" py={10}>
      <VStack spacing={10}>
        <Box>
          <Heading as="h1" size="2xl" mb={3}>
            Hello, I'm Dandi Wiratsangka
          </Heading>
          <Text color="gray.500">
            I'm a developer and movie lover🎬. I work at ⓂMechlab as Backend
            Engineer. This is where i write articles about anything that might
            help someone. Hope you enjoy!
          </Text>
        </Box>
        <Box>
          <Heading as="h2" mb={5} size="lg">
            Articles
          </Heading>
          <ArticleCard title="Everything I learn From Making This Website">
            Amet consectetur adipisicing elit. Ea obcaecati expedita illum
            itaque doloremque ab, quod dolor ipsa dignissimos sequi blanditiis
            voluptas tempora ipsam dolorem porro minima perspiciatis eum eos?
          </ArticleCard>
          <ArticleCard title="React.JS Easy Step by Step">
            Consectetur adipisicing elit. Ea obcaecati expedita illum itaque
            doloremque ab, quod dolor ipsa dignissimos sequi blanditiis voluptas
            tempora ipsam dolorem porro minima perspiciatis eum eos?
          </ArticleCard>
          <ArticleCard title="Make Cool Syntax Highlighting In ReactJS App">
            Ea obcaecati expedita illum itaque doloremque ab, quod dolor ipsa
            dignissimos sequi blanditiis voluptas tempora ipsam dolorem porro
            minima perspiciatis eum eos?
          </ArticleCard>
        </Box>
      </VStack>
    </Container>
  )
}
