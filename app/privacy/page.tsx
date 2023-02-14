import { createOgImageUrl } from 'utils/og'

export default function Page() {
  return (
    <>
      <header className="py-12 mb-1">
        <h1 className="text-4xl mb-2 leading-normal">Privacy Policy</h1>
        <p className="text-slate-500 text-sm">Last update at 12 April 2020</p>
      </header>
      <article className="article min-h-[150px]">
        <p>
          To protect and respect privacy on the internet, this website does not
          collect any personal data. It does not set any cookies and it does not
          use any third-party scripts.
        </p>
      </article>
    </>
  )
}

const ogImageUrl = createOgImageUrl({
  background: '/images/space.jpeg',
  title: 'Privacy Policy'
})

export const metadata = {
  title: 'Privacy Policy - Dandi Wiratsangka',
  openGraph: {
    images: ogImageUrl,
    title: 'Privacy Policy - Dandi Wiratsangka' as any,
    type: 'article'
  },
  twitter: {
    title: 'Privacy Policy - Dandi Wiratsangka',
    images: ogImageUrl,
    card: 'summary_large_image'
  }
}
