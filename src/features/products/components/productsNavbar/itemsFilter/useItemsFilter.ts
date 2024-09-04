import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import handleSearchParams from '@src/utils/handleSearchParams'

const useItemsFilter = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const isActive = Boolean(searchParams.get('active'))
  const isPromotion = Boolean(searchParams.get('promotion'))

  const [isActiveCheckBoxChecked, setIsActiveCheckBoxChecked] =
    useState(isActive)
  const [isPromoCheckBoxChecked, setIsPromoCheckBoxChecked] =
    useState(isPromotion)

  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false)
      return
    }
    router.push(
      handleSearchParams(searchParams, {
        page: 1,
        search: searchTerm,
        active: isActiveCheckBoxChecked,
        promotion: isPromoCheckBoxChecked,
      })
    )
  }, [searchTerm, isActiveCheckBoxChecked, isPromoCheckBoxChecked])

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
