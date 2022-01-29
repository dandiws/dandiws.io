import { BlockquoteHTMLAttributes } from 'react'

const Blockquote = (props: BlockquoteHTMLAttributes<HTMLElement>) => {
  return (
    <blockquote
      className="bg-gray-100 dark:bg-gray-800 border-l-4 border-l-accent-400 py-3 px-5"
      {...props}
    />
  )
}

export default Blockquote
