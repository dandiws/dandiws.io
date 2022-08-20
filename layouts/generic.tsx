import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { ReactNode } from 'react'

export interface GenericPageLayoutProps {
  title: string
  description?: string
  children: ReactNode
}

const GenericPageLayout = ({
  title,
  description,
  children
}: GenericPageLayoutProps) => {
  return (
    <div className="mx-auto px-8 max-w-screen-md">
      <NextSeo title={title} description={description} />
      <Head>
        <title>{title} - Dandi Wiratsangka</title>
      </Head>
      <header className="mb-10">
        <h1 className="text-3xl font-bold">{title}</h1>
      </header>
      <main className="mb-20">{children}</main>
    </div>
  )
}

export default GenericPageLayout
