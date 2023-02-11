'use client'

import { useEffect } from 'react'
import useSWR from 'swr'

async function fetcher(...args: Parameters<typeof fetch>) {
  const res = await fetch(...args)
  return res.json()
}

interface ViewCounterProps {
  slug: string
  readOnly?: boolean
}

const ViewCounter = ({ slug, readOnly = false }: ViewCounterProps) => {
  const { data } = useSWR(`/api/views/${slug}`, fetcher)
  const views = data?.total

  useEffect(() => {
    if (readOnly) {
      return
    }

    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST'
      })

    registerView()
  }, [slug])

  return <span>{`${views || '———'} views`}</span>
}

export default ViewCounter
