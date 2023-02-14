import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent
} from 'lz-string'

type OgImageParams = {
  background: string
  title: string
}

export function createOgImageUrl({ background, title }: OgImageParams) {
  const ogImageUrl = new URL('https://dandiws.my.id/api/og')
  if (background) {
    ogImageUrl.searchParams.append(
      'background',
      compressToEncodedURIComponent(background)
    )
  }
  if (title) {
    ogImageUrl.searchParams.append(
      'title',
      compressToEncodedURIComponent(title)
    )
  }
  return ogImageUrl
}

export function parseOgImageUrl(urlString: string): Partial<OgImageParams> {
  const { searchParams } = new URL(urlString)
  return {
    background: searchParams.has('background')
      ? decompressFromEncodedURIComponent(searchParams.get('background'))
      : undefined,
    title: searchParams.has('title')
      ? decompressFromEncodedURIComponent(searchParams.get('title'))
      : undefined
  }
}
