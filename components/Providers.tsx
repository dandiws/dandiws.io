'use client'

import { AccentProvider } from 'lib/accent-provider'
import { CmdkProvider } from 'lib/cmdk-provider'
import { ThemeProvider } from 'next-themes'
import { PropsWithChildren } from 'react'

export default function Providers({ children }: PropsWithChildren<{}>) {
  return (
    <ThemeProvider attribute="class">
      <AccentProvider>
        <CmdkProvider>{children}</CmdkProvider>
      </AccentProvider>
    </ThemeProvider>
  )
}
