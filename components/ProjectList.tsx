import { Project } from 'utils/types'
import ProjectItem from './ProjectItem'

export interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="space-y-24">
      {projects.map((project, i) => (
        <ProjectItem
          key={project.url + project.name}
          project={project}
          reversed={i % 2 === 1}
        />
      ))}
    </div>
  )
}

export default ProjectList
