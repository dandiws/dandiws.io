import { Command } from 'cmdk'
import { CMDK_MENU_ITEMS, MenuItem } from 'contants/menu'
import { useAccent } from 'lib/accent-provider'
import { useCmdkState } from 'lib/cmdk-provider'
import { useTheme } from 'next-themes'
import Router from 'next/router'
import { KeyboardEvent, useCallback, useEffect, useMemo, useState } from 'react'
import Github from './icons/Github'
import Moon from './icons/Moon'
import Sun from './icons/Sun'

const Cmdk = () => {
  const [search, setSearch] = useState('')
  const [open, setOpen] = useCmdkState()
  const { theme, setTheme } = useTheme()
  const { accents, accent, setAccent } = useAccent()
  const [pages, setPages] = useState([])
  const page = pages[pages.length - 1]
  const placeholder = useMemo(() => {
    if (page === 'accents') {
      return 'Search color accents'
    }
    return 'Search command or navigation'
  }, [page])

  useEffect(() => {
    const down = (e: globalThis.KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const handleMenuSelect = useCallback(
    (menu: MenuItem) => () => {
      if (menu.isExternal) {
        return window.open(menu.href)
      } else {
        Router.push(menu.href)
      }
      setOpen(false)
      setSearch('')
    },
    []
  )

  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    setOpen(false)
  }

  const pushToPage = (page: string) => {
    setPages((pages) => {
      const currentPage = pages[pages.length - 1]
      if (currentPage === page) {
        return pages
      }

      return [...pages, 'accents']
    })
    setSearch('')
  }

  const handleToggleAccent = () => pushToPage('accents')

  const backToPreviousPage = () => {
    setPages((pages) => pages.slice(0, -1))
    setSearch('')
  }

  const handleEsc = () => {
    if (pages.length > 0) {
      backToPreviousPage()
    } else {
      setOpen(false)
      setSearch('')
    }
  }

  const handleKeydown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.shiftKey && e.key.toLowerCase() === 'i') {
      e.preventDefault()
      setTheme(theme === 'dark' ? 'light' : 'dark')
      return
    }

    if (e.shiftKey && e.key.toLowerCase() === 'a') {
      e.preventDefault()
      handleToggleAccent()
      return
    }

    // Backspace goes to previous page when search is empty
    if (e.key === 'Backspace' && !search) {
      e.preventDefault()
      backToPreviousPage()
      return
    }

    if (e.key === 'Escape') {
      e.preventDefault()
      handleEsc()
    }
  }

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      onKeyDown={handleKeydown}>
      <div cmdk-header="">
        <Command.Input
          value={search}
          onValueChange={setSearch}
          placeholder={placeholder}
        />
        <button cmdk-esc="" onClick={handleEsc}>
          ESC
        </button>
      </div>
      <Command.List className="scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent scrollbar-thumb-rounded-full">
        <Command.Empty>No results found.</Command.Empty>

        {!page && (
          <>
            <Command.Group heading="Navigation">
              {CMDK_MENU_ITEMS.map((menu) => (
                <Command.Item
                  key={menu.name + menu.href}
                  value={menu.name}
                  onSelect={handleMenuSelect(menu)}>
                  {menu.name}
                </Command.Item>
              ))}
            </Command.Group>
            <Command.Group heading="Appearance">
              <Command.Item onSelect={handleToggleTheme}>
                {theme === 'dark' ? <Moon /> : <Sun />}
                <span className="ml-2">
                  Toggle Theme ({theme === 'dark' ? 'Dark' : 'Light'})
                </span>
                <kbd>Shift + I</kbd>
              </Command.Item>
              <Command.Item onSelect={handleToggleAccent}>
                <div
                  title={accent}
                  data-accent={accent}
                  className="cursor-pointer focus:outline-none bg-accent rounded-full w-[14px] h-[14px]"
                />
                <span className="ml-2">Select Accent Color</span>
                <kbd>Shift + A</kbd>
              </Command.Item>
            </Command.Group>
            <Command.Group heading="Resources">
              <Command.Item
                value="Github source code"
                onSelect={handleMenuSelect({
                  href: 'https://github.com/dandiws/dandiws.io',
                  name: 'Github Source Code',
                  isExternal: true
                })}>
                <Github />
                <span className="ml-2">Source code</span>
              </Command.Item>
            </Command.Group>
          </>
        )}
        {page === 'accents' && (
          <>
            {accents.map((color) => (
              <Command.Item
                key={color}
                value={color}
                onSelect={() => setAccent(color)}>
                {accent === color ? (
                  <svg
                    data-accent={color}
                    className="text-accent h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"
                    />
                  </svg>
                ) : (
                  <svg
                    data-accent={color}
                    className="text-accent h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
                    />
                  </svg>
                )}
                <span className="ml-2">{color}</span>
              </Command.Item>
            ))}
          </>
        )}
      </Command.List>
    </Command.Dialog>
  )
}

export default Cmdk
