import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  productsData,
  productsPerPage,
} from '@src/features/products/productsData'
import filterProducts from '@src/utils/filterProducts'
import handleSearchParams from '@src/utils/handleSearchParams'

const usePagination = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [page, setPage] = useState(1)
  const [previousPage, setPreviousPage] = useState(1)
  const searchTerm = searchParams.get('search') ?? ''
  const isActive = Boolean(searchParams.get('active'))
  const isPromotion = Boolean(searchParams.get('promotion'))

  const filteredProducts = filterProducts({
    items: productsData,
    filterTerm: searchTerm,
    isActive,
    isPromotion,
  })

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  useEffect(() => {
    const pageParam = Number(searchParams.get('page')) || 1

    if (!searchTerm && !isActive && !isPromotion) {
      // Saving current page when user is using searchbar/filter checkboxes
      setPreviousPage(pageParam)
      if (previousPage !== page) {
        // Navigating back to remembered page when user deletes used filters
        router.push(handleSearchParams(searchParams, { page: previousPage }))
      }
    }
    setPage(pageParam)
  }, [searchParams])

  return {
    page,
    totalPages,
    searchParams,
  }
}

export default usePagination
