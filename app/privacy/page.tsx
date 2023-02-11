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

const ogImage =
  'https://dandiws.my.id/api/og?background=https://images.unsplash.com/photo-1552688468-d87e6f7a58f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80&title=Privacy%20Policy'

export const metadata = {
  title: 'Privacy Policy - Dandi Wiratsangka',
  openGraph: {
    images: [
      {
        url: ogImage
      }
    ]
  },
  twitter: {
    images: ogImage,
    card: 'summary_large_image'
  }
}
