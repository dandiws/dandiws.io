'use client'

import { AccentProvider } from 'lib/accent-provider'
import { CmdkProvider } from 'lib/cmdk-provider'
import { ThemeProvider } from 'next-themes'
import { PropsWithChildren } from 'react'
import { Provider as ReactWrapBalancerProvider } from 'react-wrap-balancer'

export default function Providers({ children }: PropsWithChildren<{}>) {
  return (
    <ThemeProvider disableTransitionOnChange>
      <ReactWrapBalancerProvider>
        <AccentProvider>
          <CmdkProvider>{children}</CmdkProvider>
        </AccentProvider>
      </ReactWrapBalancerProvider>
    </ThemeProvider>
  )
}
