import { useMDXComponent } from 'next-contentlayer/hooks'
import mdxcomponents from './mdxcomponents'

export default function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code) as any

  return (
    <article className="article">
      <Component components={mdxcomponents} />
    </article>
  )
}
