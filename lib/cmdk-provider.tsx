'use client'

import React, { createContext, useContext, useState } from 'react'

const CmdkContext =
  createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>(
    undefined
  )

export const CmdkProvider = (props: any) => {
  const [open, setOpen] = useState(false)
  return <CmdkContext.Provider {...props} value={[open, setOpen]} />
}

export const useCmdkState = () => useContext(CmdkContext)
