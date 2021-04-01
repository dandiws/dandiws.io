import { Image } from '@chakra-ui/image'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'

const ProjectItem = ({ project, reversed = false, ...props }) => {
  return (
    <Flex
      align="start"
      flexDirection={reversed ? 'row-reverse' : 'row'}
      alignItems="center"
    >
      <Box width="30%" ml={reversed ? 8 : 0}>
        <Heading
          _hover={(theme) => ({
            cursor: 'pointer',
            color: theme.colors.accent,
            textDecoration: 'underline',
          })}
          as="h3"
          fontSize={['1.65rem']}
          mb={4}
        >
          <a href={project.url} target="__blank">
            {project.name}
          </a>
        </Heading>
        <Text textStyle="postDetail" mb={4}>
          {project.year}
        </Text>
        <Text color="gray.500">{project.summary}</Text>
      </Box>
      <Image
        ml={reversed ? 0 : 8}
        src={project.image_url}
        borderRadius="0.25rem"
        width="70%"
      />
    </Flex>
  )
}

export default ProjectItem
