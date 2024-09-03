import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import handleSearchParams from '@src/utils/handleSearchParams'

const useItemsFilter = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isPromoCheckBoxChecked, setIsPromoCheckBoxChecked] = useState(false)
  const [isActiveCheckBoxChecked, setIsActiveCheckBoxChecked] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = Number(searchParams.get('page') ?? '1')

  useEffect(() => {
    router.push(handleSearchParams({ page, searchTerm }))
  }, [searchTerm])

  return {
    searchTerm,
    setSearchTerm,
    isPromoCheckBoxChecked,
    setIsPromoCheckBoxChecked,
    isActiveCheckBoxChecked,
    setIsActiveCheckBoxChecked,
  }
}

export default useItemsFilter
