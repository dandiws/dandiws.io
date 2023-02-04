'use client'

import debounce from 'lodash.debounce'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, useCallback, useEffect, useMemo } from 'react'

export default function BlogSearch() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()
  const searchTerm = params.get('search')

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const newParams = new URLSearchParams(params)
    newParams.set('search', value)
    router.replace(`${pathname}?${newParams.toString()}`)
  }, [])

  const debouncedChangeHandler = useMemo(() => debounce(handleChange, 100), [])

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel()
    }
  }, [])

  return (
    <input
      className="mt-8 px-3 py-2 w-full rounded-md bg-gray-100 dark:bg-dark-100 outline-none focus:ring"
      type="search"
      placeholder="Search articles..."
      onChange={debouncedChangeHandler}
      defaultValue={searchTerm}
    />
  )
}
