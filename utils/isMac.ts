export const isMac = () => {
  const platform = navigator.platform || navigator['userAgentData'].platform
  if (platform) {
    return platform.toUpperCase().indexOf('MAC') >= 0
  }
  return false
}
