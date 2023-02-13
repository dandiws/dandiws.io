export const themes = ['light', 'dark'] as const
export const accents = ['green', 'red', 'blue', 'purple', 'yellow'] as const
export type PrimaryTheme = typeof themes[number]
export type AccentTheme = typeof accents[number]
export type NextTheme = `${PrimaryTheme}-${AccentTheme}`

export const NextThemes = themes.flatMap((theme) =>
  accents.map((accent) => `${theme}-${accent}`)
) as NextTheme[]

export const getRandomTheme = () =>
  NextThemes[accents.length + Math.floor(Math.random() * accents.length - 1)]
