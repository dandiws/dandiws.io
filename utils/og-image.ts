import { Post } from './types'

export const getOgImageUrl = (post: Post, fontSize = 100) => {
  if (post.ogImage) {
    return `https://og-image-xi-seven.vercel.app/${post.title}.png?theme=light&md=0&fontSize=${fontSize}px&images=${post.ogImage}`
  }

  return ''
}
