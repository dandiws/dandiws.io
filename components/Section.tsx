import clsx from 'clsx'
import { HTMLProps } from 'react'

const Section = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <div {...props} className={clsx('py-20', className)} />
  )
}

export default Section
