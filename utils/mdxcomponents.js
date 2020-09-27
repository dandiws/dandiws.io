import {
  Box,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from '@chakra-ui/core'

const mdxcomponents = {
  h1: (props) => <Heading {...props} as="h1" size="2xl" mb={5} />,
  h2: (props) => <Heading {...props} as="h2" size="lg" mb={5} />,
  h3: (props) => <Heading {...props} as="h3" size="md" mb={4} />,
  h4: (props) => <Heading {...props} as="h4" size="sm" mb={4} />,
  h5: (props) => <Heading {...props} as="h5" size="xs" mb={3} />,
  h6: (props) => <Heading {...props} as="h6" size="xs" mb={3} />,
  p: (props) => <Text {...props} mb={8} />,
  ul: (props) => <UnorderedList {...props} mb={8} />,
  ol: (props) => <OrderedList {...props} mb={8} />,
  li: (props) => <ListItem {...props} />,
}

export default mdxcomponents
