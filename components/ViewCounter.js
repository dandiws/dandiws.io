import { useEffect } from 'react'
import useSWR from 'swr'

async function fetcher (...args) {
  const res = await fetch(...args)
  return res.json()
}

const ViewCounter = ({ slug, readOnly = false }) => {
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

  return `${views || '–––'} views`
}

export default ViewCounter
