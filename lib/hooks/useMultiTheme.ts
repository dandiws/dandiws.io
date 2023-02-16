'use client'

import { AccentTheme, PrimaryTheme, accents } from 'contants/themes'
import { useTheme } from 'next-themes'
import { useCallback } from 'react'

export function useMultiTheme() {
  const {
    theme: originalTheme,
    setTheme: setOriginalTheme,
    ...rest
  } = useTheme()
  const [theme, accent] = (
    originalTheme ? originalTheme.split('-') : ['', '']
  ) as [PrimaryTheme, AccentTheme]

  const setTheme = useCallback(
    (theme: PrimaryTheme) => {
      setOriginalTheme([theme, accent].join('-'))
    },
    [accent]
  )

  const setAccent = useCallback(
    (accent: AccentTheme) => {
      setOriginalTheme([theme, accent].join('-'))
    },
    [theme]
  )

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [setTheme, theme])

  return { theme, accent, setTheme, toggleTheme, setAccent, accents, ...rest }
}
