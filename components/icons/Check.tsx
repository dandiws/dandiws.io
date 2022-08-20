import Icon, { IconProps } from 'components/Icon'

const CheckIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
    </Icon>
  )
}

export default CheckIcon
