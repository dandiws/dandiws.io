import ExternalLink from 'components/ExternalLink'
import Github from 'components/icons/Github'
import Link from 'components/Link'
import { getAllProjects } from 'utils/projects'

export default function Page() {
  const projects = getAllProjects()

  return (
    <>
      <header className="py-12 mb-6">
        <h1 className="text-4xl mb-3 leading-normal">Projects</h1>
        <p className="text-slate-500">
          Curated array of personal software engineering projects crafted during
          my leisure hours
        </p>
      </header>
      <div className="space-y-12">
        {projects.map((project) => {
          return (
            <div key={project.name} className="flex">
              <div className="text-slate-400">{project.year}</div>
              <div className="ml-6">
                <h4 className="font-bold font-sans leading-none mb-2">
                  <ExternalLink href={project.url} className="no-underline">
                    {project.name}
                  </ExternalLink>
                </h4>
                {project.githubUrl && (
                  <Link
                    className="text-gray text-sm block md:hidden mb-2"
                    href={project.githubUrl}
                    aria-label="Github repository">
                    Github <Github />
                  </Link>
                )}

                <p className="text-slate-400">{project.summary}</p>
                {project.tags && (
                  <div className="space-x-2 mt-3">
                    {project.tags.map((tag) => (
                      <span
                        className="bg-gray-200 dark:bg-gray-800 text-gray text-xs py-1 px-2 rounded-md whitespace-nowrap"
                        key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="ml-auto hidden md:block">
                {project.githubUrl && (
                  <Link
                    className="text-gray text-sm"
                    href={project.githubUrl}
                    aria-label="Github repository">
                    Github <Github />
                  </Link>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export const metadata = {
  title: 'Projects - Dandi Wiratsangka',
  description:
    'Curated array of personal software engineering projects crafted during my leisure hours'
}
