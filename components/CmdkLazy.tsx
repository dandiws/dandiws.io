'use client'

import { useMounted } from 'lib/hooks/useMounted'
import dynamic from 'next/dynamic'

const isBigScreen = () => {
  if (typeof window === 'undefined') {
    return false
  }

  return window.matchMedia('(min-width: 768px)').matches
}

const Cmdk = isBigScreen()
  ? dynamic(() => import('../components/Cmdk'), { ssr: false })
  : () => null

export default function CmdkLazy() {
  const mounted = useMounted()
  return mounted ? <Cmdk /> : null
}
