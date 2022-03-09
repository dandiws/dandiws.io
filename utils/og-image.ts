import { Post } from './types'

export const createOgImageUrl = (title: string, icon?: string, fontSize = 100) => {
  return [
    `https://og-image-xi-seven.vercel.app/${title}.png?theme=light&md=0&fontSize=${fontSize}px`,
    icon ? `&images=${icon}` : ''
  ].join('')
}

export const createPostOgImageUrl = (post: Post, fontSize = 100) => {
  return createOgImageUrl(post.title, post.ogImage, fontSize)
}
