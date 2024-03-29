import Icon from '../Icon'

const Hamburger = (props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"
    />
  </Icon>
)

export default Hamburger
