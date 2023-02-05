'use client'

import Search from 'components/icons/Search'
import debounce from 'lodash.debounce'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, useCallback, useEffect, useMemo } from 'react'
import { useBlog } from './BlogContext'

export default function BlogSearch() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()
  const searchTerm = params.get('search')
  const { articles, filteredArticles } = useBlog()

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
    <div className="flex flex-col md:flex-row-reverse md:items-center justify-between my-8 gap-4">
      <div className="relative w-full md:max-w-xs">
        <input
          className="px-3 h-10 w-full rounded-md bg-gray-100 dark:bg-gray-800 outline-none focus:ring pr-10"
          type="search"
          placeholder="Search articles..."
          onChange={debouncedChangeHandler}
          defaultValue={searchTerm}
        />
        <span className="grid place-items-center h-10 w-10 absolute top-0 right-0 text-slate-500">
          <Search />
        </span>
      </div>
      <div className="text-sm text-gray">
        Showing {filteredArticles.length} of {articles.length} articles
      </div>
    </div>
  )
}
