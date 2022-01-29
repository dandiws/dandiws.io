import clsx from 'clsx'
import { SVGProps } from 'react'

const Icon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    className={clsx('leading-[1em] inline-block w-[1em] h-[1em]', className)}
    {...props}
  />
)

export default Icon
