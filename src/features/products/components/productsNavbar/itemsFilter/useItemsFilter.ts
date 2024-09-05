import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import handleSearchParams from '@src/utils/handleSearchParams'

const useItemsFilter = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const [isInputFocused, setIsInputFocused] = useState(false)
  const inputRef = useRef(null)

  const searchParam = searchParams.get('search') ?? ''
  const isActive = Boolean(searchParams.get('active'))
  const isPromotion = Boolean(searchParams.get('promotion'))

  const [searchTerm, setSearchTerm] = useState(searchParam)
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

  const checkIsInputFocused = () => {
    setIsInputFocused(inputRef.current === document.activeElement)
  }

  return {
    searchTerm,
    setSearchTerm,
    isPromoCheckBoxChecked,
    setIsPromoCheckBoxChecked,
    isActiveCheckBoxChecked,
    setIsActiveCheckBoxChecked,
    isInputFocused,
    checkIsInputFocused,
    inputRef,
  }
}

export default useItemsFilter
