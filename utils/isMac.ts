export const isMac = () => {
  const platform =
    typeof window === 'undefined'
      ? false
      : window.navigator.platform || window.navigator.userAgentData.platform
  if (platform) {
    return platform.toUpperCase().indexOf('MAC') >= 0
  }
  return false
}
