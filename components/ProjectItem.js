import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import Image from './Image'

const ProjectItem = ({ project, reversed = false, ...props }) => {
  return (
    <Flex
      align="start"
      flexDirection={{
        base: 'column',
        md: reversed ? 'row-reverse' : 'row'
      }}
      alignItems="center"
    >
      <Box>
        <Heading
          _hover={(theme) => ({
            cursor: 'pointer',
            color: theme.colors.accent,
            textDecoration: 'underline'
          })}
          as="h3"
          size="md"
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
      <Box
        ml={{
          base: 0,
          md: reversed ? 0 : 16
        }}
        mt={{
          base: 16,
          md: 0
        }}
        mr={{
          base: 0,
          md: reversed ? 16 : 0
        }}
      >
        <Image
          width={900}
          height={600}
          src={project.image_url}
          borderRadius="0.25rem"
          alt={project.name}
        />
      </Box>
    </Flex>
  )
}

export default ProjectItem
