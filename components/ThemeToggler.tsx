'use client'

import clsx from 'clsx'
import { useMultiTheme } from 'lib/hooks/useMultiTheme'
import Moon from './icons/Moon'
import Sun from './icons/Sun'

export default function ThemeToggler() {
  const { toggleTheme } = useMultiTheme()

  return (
    <div className="flex space-x-2 mx-5 md:mr-0">
      <button
        aria-label="Toggle theme"
        onClick={toggleTheme}
        className="icon-btn h-7 w-7 relative overflow-hidden">
        <span
          className={clsx(
            'absolute w-7 h-7 grid place-items-center transition-transform origin-bottom-right duration-300 rotate-0 dark:rotate-180'
          )}>
          <Sun />
        </span>
        <span
          className={clsx(
            'absolute w-7 h-7 grid place-items-center transition-transform origin-bottom-left duration-300 -rotate-180 dark:rotate-0'
          )}>
          <Moon />
        </span>
      </button>
    </div>
  )
}
