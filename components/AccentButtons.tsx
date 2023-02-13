'use client'

import clsx from 'clsx'
import { useMultiTheme } from 'lib/hooks/useMultiTheme'

const AccentButtons = () => {
  const { accents, setAccent } = useMultiTheme()

  return (
    <div className="space-x-1 flex items-center h-4">
      {accents.map((color) => {
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
