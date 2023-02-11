import { ReactNode } from 'react'

export interface GenericPageLayoutProps {
  title: string
  children: ReactNode
}

const GenericPageLayout = ({ title, children }: GenericPageLayoutProps) => {
  return (
    <div className="mx-auto px-8 max-w-screen-md">
      <header className="mb-10">
        <h1 className="text-3xl font-bold">{title}</h1>
      </header>
      <article className="articles mb-20">{children}</article>
    </div>
  )
}

export default GenericPageLayout
