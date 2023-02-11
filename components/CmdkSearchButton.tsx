'use client'

import { useCmdkState } from 'lib/cmdk-provider'
import Search from './icons/Search'

export default function CmdkSearchButton() {
  const [, setOpenCmdk] = useCmdkState()
  return (
    <button
      onClick={() => setOpenCmdk(true)}
      className="hidden md:block ml-6 bg-base hover:bg-base-2 text-gray focus:outline-none text-left text-[11px] ring-1 ring-slate-600/25 py-1.5 px-3 rounded-md">
      <Search />
      <kbd className="whitespace-nowrap ml-8">Ctrl+K</kbd>
    </button>
  )
}
