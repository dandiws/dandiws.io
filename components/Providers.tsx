'use client'

import { CmdkProvider } from 'lib/cmdk-provider'
import { ThemeProvider } from 'next-themes'
import { PropsWithChildren } from 'react'
import { Provider as ReactWrapBalancerProvider } from 'react-wrap-balancer'

export default function Providers({
  children,
  themes,
  defaultTheme
}: PropsWithChildren<{ themes: string[]; defaultTheme: string }>) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      defaultTheme={defaultTheme}
      themes={themes}>
      <ReactWrapBalancerProvider>
        <CmdkProvider>{children}</CmdkProvider>
      </ReactWrapBalancerProvider>
    </ThemeProvider>
  )
}
