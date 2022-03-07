import clsx from 'clsx'
import { SVGProps } from 'react'

export type IconProps = SVGProps<SVGSVGElement>
const Icon = ({ className, ...props }: IconProps) => (
  <svg
    className={clsx('leading-[1em] inline-block w-[1em] h-[1em]', className)}
    {...props}
  />
)

export default Icon
