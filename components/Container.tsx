import clsx from 'clsx'
import { HTMLProps } from 'react'

const Container = ({ className, ...props }: HTMLProps<HTMLDivElement>) => (
  <div className={clsx('max-w-screen-lg mx-auto px-8', className)} {...props} />
)

export default Container
