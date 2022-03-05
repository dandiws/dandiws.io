import { useAccent } from 'lib/accent-provider'
import { useMemo } from 'react'
import clsx from 'clsx'
import { useMounted } from 'lib/hooks/useMounted'
const shuffle = (arr: Array<any>) => arr.sort(() => Math.random() - 0.5)

const AccentButtons = () => {
  const { accents, accent, setAccent } = useAccent()
  const mounted = useMounted()
  const shuffled = useMemo(() => {
    return mounted ? shuffle([...accents]) : []
  }, [accents, mounted])

  return (
    <div className="space-x-1 flex items-center">
      {shuffled.map((color) => {
        return (
          <button
            data-accent={color}
            onClick={() => {
              console.log(color)
              setAccent(color)
            }}
            key={color}
            className={clsx(
              'bg-accent rounded-full',
              color === accent ? 'w-2 h-1' : 'w-1 h-1'
            )}
          />
        )
      })}
    </div>
  )
}

export default AccentButtons
