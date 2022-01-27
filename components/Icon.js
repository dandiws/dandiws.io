import clsx from 'clsx'

const Icon = ({ className, ...props }) => (
  <svg className={clsx('leading-[1em] inline-block w-[1em] h-[1em]', className)} {...props}>
    {props.children}
  </svg>
)

export default Icon
