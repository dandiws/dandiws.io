import { VStack } from '@chakra-ui/layout'
import ProjectItem from './ProjectItem'

const ProjectList = ({ projects = [] }) => {
  return (
    <VStack spacing={24}>
      {projects.map((project, i) => (
        <ProjectItem key={project.url + project.name} project={project} reversed={i % 2 === 1} />
      ))}
    </VStack>
  )
}

export default ProjectList
