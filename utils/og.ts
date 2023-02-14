type OgImageParams = {
  background: string
  title: string
}

export function createOgImageUrl({ background, title }: OgImageParams) {
  const ogImageUrl = new URL('https://dandiws.my.id/api/og')
  if (background) {
    ogImageUrl.searchParams.append('background', background)
  }
  if (title) {
    ogImageUrl.searchParams.append('title', title)
  }
  return ogImageUrl
}

export function parseOgImageUrl(urlString: string): Partial<OgImageParams> {
  const { searchParams } = new URL(urlString)
  return {
    background: searchParams.has('background')
      ? searchParams.get('background')
      : undefined,
    title: searchParams.has('title') ? searchParams.get('title') : undefined
  }
}
