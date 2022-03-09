import Container from 'components/Container'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Project } from 'utils/types'
import projects from 'utils/projects'
import Link from 'components/Link'
import Divider from 'components/Divider'
import Github from 'components/icons/Github'
import { NextSeo } from 'next-seo'
import { createOgImageUrl } from 'utils/og-image'

export interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <Container>
      <NextSeo openGraph={{
        images: [{
          url: createOgImageUrl('Dandi Wiratsangka\'s Projects')
        }]
      }}
      />
      <Head>
        <title>Projects - Dandi Wiratsangka</title>
      </Head>
      <div className="space-y-10">
        <header>
          <h1 className="text-5xl mb-3">Projects</h1>
        </header>
        <div className="space-y-12">
          {projects.map((project) => {
            return (
              <div key={project.name}>
                <div className="flex items-center mb-2">
                  <h3 className="cursor-pointer hover:text-accent hover:underline text-xl">
                    <Link
                      className="text-accent text-lg"
                      href={project.url}
                      isExternal
                    >
                      {project.name}
                    </Link>
                  </h3>
                  <Divider />
                  <span className="text-gray font-mono text-sm">
                    {project.year}
                  </span>
                  {project.githubUrl && (
                    <>
                      <Divider />
                      <Link
                        className="text-gray"
                        href={project.githubUrl}
                        aria-label="Github repository"
                      >
                        <Github />
                      </Link>
                    </>
                  )}
                </div>

                <p className="text-gray mb-2">{project.summary}</p>
                <div className="space-x-2 flex">
                  {project.tags &&
                    project.tags.map((tag) => (
                      <span
                        className="bg-gray-200 dark:bg-gray-800 text-gray text-xs py-1 px-2 rounded-md  font-mono"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}

export default Projects

export const getStaticProps: GetStaticProps<ProjectsProps> = () => {
  return {
    props: {
      projects
    }
  }
}
