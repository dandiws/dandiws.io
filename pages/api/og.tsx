/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { ImageResponse } from '@vercel/og'
import { allPosts } from 'contentlayer/generated'
import dayjs from 'dayjs'
import { NextRequest } from 'next/server'
import { parseOgImageUrl } from 'utils/og'

export const config = {
  runtime: 'edge'
}

export default function handler(req: NextRequest) {
  try {
    const { searchParams, origin } = new URL(req.url)
    const hasSlug = searchParams.has('slug')
    const post = hasSlug
      ? allPosts.find((post) => post.slug === searchParams.get('slug'))
      : null
    const { background: _background, title: _title } = parseOgImageUrl(req.url)

    const title = post ? post.title : _title || 'Dandi Wiratsangka'
    const background = post
      ? `${origin}${post.image}`
      : _background.startsWith('/')
      ? `${origin}${_background}`
      : _background

    return new ImageResponse(
      (
        <div tw="flex relative w-full h-full">
          {!!background && (
            <img tw="absolute w-full" src={background} alt="Background" />
          )}
          <div tw="relative p-16 flex flex-col h-full items-center justify-center w-full bg-black bg-opacity-90">
            <h2 tw="flex text-center leading-snug text-5xl font-bold tracking-tight text-white">
              <span>{title}</span>
            </h2>
            {Boolean(post) && (
              <div tw="flex absolute bottom-20 text-slate-400 text-xl mt-10 font-mono">
                <span>{dayjs(post.publishedAt).format('DD MMMM YYYY')}</span>
                <span tw="mx-6">-</span>
                <span>{post.readingTime}</span>
              </div>
            )}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500
    })
  }
}
