import { Project } from './types'

const projects: Project[] = [
  {
    name: 'Snake Game',
    url: 'https://github.com/dandiws/snake-game',
    imageUrl: '/images/snakegame.png',
    summary: 'Snake game implemented in React.js, Vue.js, Svelte, and more',
    year: 2021,
    tags: ['JavaScript', 'React', 'Vue', 'Svelte']
  },
  {
    name: 'Typefaster',
    url: 'https://typefaster.vercel.app',
    imageUrl: '/images/typefaster.png',
    summary:
      'Typefaster is a clean and minimal typing test built with React and Theme UI. It has several feature such as multi-language support and color themes.',
    year: 2020,
    featured: true,
    tags: ['React', 'Theme UI']
  },
  {
    name: 'Dandiws.io',
    url: 'https://github.com/dandiws/dandiws.io',
    imageUrl: '/images/dandiwsio.png',
    summary:
      'Dandiws.io is my personal website built with Next.js and deployed on vercel. The source code is available on github.',
    year: 2020,
    featured: true,
    tags: ['React', 'Next.js', 'MDX', 'Chakra UI']
  }
]

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured)
}

export const getNonFeaturedProjects = (): Project[] => {
  return projects.filter((project) => !project.featured)
}

export default projects
