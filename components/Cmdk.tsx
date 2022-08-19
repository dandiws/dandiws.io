import { Command } from 'cmdk'
import { useEffect, useState } from 'react'

const Cmdk = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && e.metaKey) {
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <Command.Dialog open={open} onOpenChange={setOpen}>
      <Command.Input />

      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Fruits">
          <Command.Item>Apple</Command.Item>
          <Command.Item>Orange</Command.Item>
          <Command.Separator />
          <Command.Item>Pear</Command.Item>
          <Command.Item>Blueberry</Command.Item>
        </Command.Group>

        <Command.Item>Fish</Command.Item>
      </Command.List>
    </Command.Dialog>
  )
}

export default Cmdk
