'use client'

import { useAccent } from 'lib/accent-provider'
import { useMemo } from 'react'
import clsx from 'clsx'
import { useMounted } from 'lib/hooks/useMounted'
const shuffle = (arr: Array<any>) => arr.sort(() => Math.random() - 0.5)

const AccentButtons = () => {
  const { accents, setAccent } = useAccent()
  const mounted = useMounted()
  const shuffled = useMemo(() => {
    return mounted ? shuffle([...accents]) : []
  }, [accents, mounted])

  return (
    <div className="space-x-1 flex items-center h-4">
      {shuffled.map((color) => {
        return (
          <button
            aria-label={`Toggle ${color} accent`}
            title={color}
            data-accent={color}
            onClick={() => {
              setAccent(color)
            }}
            key={color}
            className={clsx(
              'cursor-pointer focus:outline-none bg-accent rounded-full w-1.5 h-1.5 transform hover:scale-125 transition-transform'
            )}
          />
        )
      })}
    </div>
  )
}

export default AccentButtons
