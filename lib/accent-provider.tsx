import { createContext, FC, useContext, useEffect, useState } from 'react'

const ACCENTS = ['green', 'red', 'blue', 'purple', 'yellow'] as const
type AccentColor = typeof ACCENTS[number]
const randomAccent = () => ACCENTS[Math.floor(Math.random() * ACCENTS.length)]

const useAccentContext = () => {
  const [accent, setAccent] = useState<AccentColor>()

  useEffect(() => {
    const accent = (localStorage.getItem('accent') || randomAccent()) as AccentColor
    setAccent(accent)
  }, [])

  useEffect(() => {
    if (accent) {
      localStorage.setItem('accent', accent)
      document.body.setAttribute('data-accent', accent)
    }
  }, [accent])

  return {
    accents: ACCENTS,
    accent,
    setAccent
  }
}

type AccentContextType = ReturnType<typeof useAccentContext>

export const AccentContext = createContext<AccentContextType>(null as any)

export const AccentProvider: FC = ({ children }) => {
  const context = useAccentContext()

  return (
    <AccentContext.Provider value={context}>
      {children}
    </AccentContext.Provider>
  )
}

export const useAccent = () => useContext(AccentContext)
