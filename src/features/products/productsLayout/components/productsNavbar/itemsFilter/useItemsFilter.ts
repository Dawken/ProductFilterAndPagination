import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import handleSearchParams from '@src/utils/handleSearchParams'

const useItemsFilter = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const router = useRouter()
  const searchParams = useSearchParams()

  const page = Number(searchParams.get('page') ?? '1')

  useEffect(() => {
    router.push(handleSearchParams({ page, searchTerm }))
  }, [searchTerm])

  return {
    searchTerm,
    setSearchTerm,
  }
}

export default useItemsFilter
