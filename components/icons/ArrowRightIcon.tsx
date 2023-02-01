import Icon, { IconProps } from 'components/Icon'

const ArrowRightIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
      />
    </Icon>
  )
}

export default ArrowRightIcon
