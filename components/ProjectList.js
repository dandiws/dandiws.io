import ProjectItem from './ProjectItem'

const ProjectList = ({ projects = [] }) => {
  return (
    <div className="space-y-24">
      {projects.map((project, i) => (
        <ProjectItem key={project.url + project.name} project={project} reversed={i % 2 === 1} />
      ))}
    </div>
  )
}

export default ProjectList
