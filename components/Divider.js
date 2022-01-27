import clsx from 'clsx'

const Divider = ({ divider = '/', ...props }) => (
  <div className={clsx('select-none mx-4 text-gray-700', props.className)}>{divider}</div>
)

export default Divider
