import clsx from 'clsx'
import { ComponentProps } from 'react'

export interface DividerProps {
  divider?: string;
}

const Divider = ({
  divider = '/',
  ...props
}: ComponentProps<'div'> & DividerProps) => (
  <div className={clsx('select-none mx-4 text-gray-300 dark:text-gray-700', props.className)}>
    {divider}
  </div>
)

export default Divider
