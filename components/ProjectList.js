import { VStack } from '@chakra-ui/core'
import Link from 'next/link'
import ProjectItem from './ProjectItem'

const ProjectList = ({ projects = [] }) => {
  return (
    <VStack spacing={24}>
      {projects.map((project, i) => (
        <ProjectItem project={project} reversed={i % 2 === 1} />
      ))}
    </VStack>
  )
}

export default ProjectList
