import { ReadonlyURLSearchParams } from 'next/navigation'

const handleSearchParams = (
  searchParams: ReadonlyURLSearchParams,
  updates: Record<string, string | number | boolean | null>
) => {
  const params = new URLSearchParams(searchParams)

  Object.keys(updates).forEach((key) => {
    const value = updates[key]
    if (value) {
      params.set(key, String(value))
    } else {
      params.delete(key)
    }
  })

  return `${window.location.pathname}?${params}`
}

export default handleSearchParams
