'use client'

import clsx from 'clsx'
import { useMounted } from 'lib/hooks/useMounted'
import { useTheme } from 'next-themes'
import { useCallback } from 'react'
import Moon from './icons/Moon'
import Sun from './icons/Sun'

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme()
  const mounted = useMounted()

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [theme])

  return (
    <div className="flex space-x-2 mx-5 md:mr-0">
      <button
        aria-label="Toggle theme"
        onClick={toggleTheme}
        className="icon-btn h-7 w-7 relative overflow-hidden">
        <span
          className={clsx(
            'absolute w-7 h-7 grid place-items-center transition-transform origin-bottom-right duration-300',
            mounted && theme === 'light' ? 'rotate-0' : 'rotate-180'
          )}>
          <Sun />
        </span>
        <span
          className={clsx(
            'absolute w-7 h-7 grid place-items-center transition-transform origin-bottom-left duration-300',
            mounted && theme === 'dark' ? 'rotate-0' : '-rotate-180'
          )}>
          <Moon />
        </span>
      </button>
    </div>
  )
}
