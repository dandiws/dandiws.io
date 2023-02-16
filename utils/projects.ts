import { Project } from './types'

export const projects: Project[] = [
  {
    name: 'Snake Game',
    url: 'https://github.com/dandiws/snake-game',
    imageUrl: '/images/snakegame.png',
    summary: 'Snake game implemented in React.js, Vue.js, Svelte, and more',
    year: 2021,
    tags: ['JavaScript', 'React', 'Vue', 'Svelte'],
    githubUrl: 'https://github.com/dandiws/snake-game'
  },
  {
    name: 'Typefaster',
    url: 'https://typefaster.vercel.app',
    imageUrl: '/images/typefaster.png',
    summary:
      'Typefaster is a clean and minimal typing test built with React and Theme UI',
    longerSummary:
      'Typefaster is a clean and minimal typing test built with React and Theme UI. It has several feature such as multi-language support and color themes.',
    year: 2020,
    featured: true,
    tags: ['React', 'Theme UI'],
    githubUrl: 'https://github.com/dandiws/typefaster'
  },
  {
    name: 'dandiws.my.id',
    url: 'https://github.com/dandiws/dandiws.io',
    imageUrl: '/images/dandiwsio.png',
    summary:
      'dandiws.my.id is my personal website built with Next.js and deployed on vercel.',
    longerSummary:
      'dandiws.my.id is my personal website built with Next.js and deployed on vercel. The source code is available on github.',
    year: 2020,
    featured: true,
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Typescript'],
    githubUrl: 'https://github.com/dandiws/dandiws.io'
  },
  {
    name: 'd-fastfinger',
    url: 'https://d-fastfinger.vercel.app',
    summary: 'Typing speed meter built with vanilla js and css',
    year: 2017,
    tags: ['Javascript', 'CSS'],
    githubUrl: 'https://github.com/dandiws/D-Fastfinger'
  },
  {
    name: 'svelte-audio-player',
    url: 'https://svelte-audio-player.vercel.app',
    summary:
      'Component that wraps html audio tag for building custom audio player.',
    year: 2022,
    tags: ['Svelte'],
    githubUrl: 'https://github.com/dandiws/svelte-audio-player'
  }
]

export const getAllProjects = (): Project[] => {
  return projects.sort((a, b) => {
    const byYear = b.year - a.year
    if (byYear === 0) {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    }

    return byYear
  })
}

export const getFeaturedProjects = (): Project[] => {
  return getAllProjects().filter((project) => project.featured)
}

export const getNonFeaturedProjects = (): Project[] => {
  return getAllProjects().filter((project) => !project.featured)
}
