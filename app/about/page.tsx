import ExternalLink from 'components/ExternalLink'
import Image from 'next/image'
import { createOgImageUrl } from 'utils/og'

export default function Page() {
  return (
    <>
      <header className="py-12">
        <h1 className="text-4xl mb-3 leading-normal">About Me</h1>
      </header>
      <article className="article">
        <div className="flex flex-col md:flex-row gap-10">
          <Image
            width={200}
            height={200}
            src="/images/avatar.jpg"
            alt="Picture of Dandi Wiratsangka"
            className="rounded-md mx-auto aspect-square w-[160px] md:w-[230px] flex-shrink-0 self-start filter saturate-0"
          />
          <div>
            <p>
              Hello there! You've manage to reach this page, so I assume you
              want to know more about me 😀. So let me introduce my self.
            </p>
            <p>
              My name is Dandi Wiratsangka Sejati. I'm a software engineer and
              currently working at{' '}
              <ExternalLink href="https://glair.ai">glair</ExternalLink>. I
              graduated from Universitas Gadjah Mada with bachelor degree in
              Computer Science in 2020. Currently I live in my hometown
              Pemalang, Central Java, Indonesia.
            </p>
            <p>
              Want to know more about my experience?{' '}
              <ExternalLink href="/resume.pdf">Download Resume</ExternalLink>
            </p>
          </div>
        </div>
      </article>
    </>
  )
}

const ogImageUrl = createOgImageUrl({
  background: '/images/space.jpeg',
  title: 'About Me'
})

export const metadata = {
  title: 'About Me - Dandi Wiratsangka',
  description: `A brief summary of who I am`,
  openGraph: {
    images: ogImageUrl
  },
  twitter: {
    images: ogImageUrl,
    card: 'summary_large_image'
  }
}
