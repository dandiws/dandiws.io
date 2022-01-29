import clsx from 'clsx'
import Divider from './Divider'
import Image from 'next/image'
import { Project } from 'utils/types'

export interface ProjectItemProps {
  project: Project;
  reversed?: boolean;
}

const ProjectItem = ({ project, reversed = false }: ProjectItemProps) => {
  return (
    <div
      className={clsx(
        'flex items-center flex-col',
        reversed ? 'md:flex-row-reverse' : 'md:flex-row'
      )}
    >
      <div className="w-full">
        <div className="flex mb-2">
          {project.featured && (
            <>
              <span className="postDetail">Featured project</span>
              <Divider />
            </>
          )}
          <span className="postDetail">{project.year}</span>
        </div>
        <h3 className="cursor-pointer hover:text-accent-400 hover:underline text-xl mb-3">
          <a href={project.url} target="__blank">
            {project.name}
          </a>
        </h3>
        <p className="text-gray mb-4">{project.summary}</p>
        <div className="space-x-2">
          {project.tags &&
            project.tags.map((tag) => (
              <span
                className="bg-gray-200 dark:bg-gray-800 text-gray text-sm py-1 px-2 rounded-md  font-mono"
                key={tag}
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
      <div className="mx-8 my-5" />
      <div className="w-full">
        <Image
          width={900}
          height={600}
          src={project.imageUrl}
          className="rounded-sm"
          alt={project.name}
        />
      </div>
    </div>
  )
}

export default ProjectItem
