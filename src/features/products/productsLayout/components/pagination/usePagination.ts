import { useRouter, useSearchParams } from 'next/navigation'
import productsData from '../../../productsData'
import filterItems from '@src/utils/filterItems'
import { useEffect, useState } from 'react'
import handleSearchParams from '@src/utils/handleSearchParams'

const usePagination = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [page, setPage] = useState(1)
  const [previousPage, setPreviousPage] = useState(1)
  const searchTerm = searchParams.get('search') ?? ''

  const productsPerPage = 5

  const filteredProducts = filterItems({
    items: productsData,
    filterTerm: searchTerm,
  })

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  useEffect(() => {
    const pageParam = Number(searchParams.get('page')) || 1

    if (!searchTerm) {
      // Saving current page before user starts typing
      setPreviousPage(pageParam)
      if (previousPage !== page) {
        // Navigating back to remembered page when user deleted search content
        router.push(handleSearchParams({ page: previousPage, searchTerm }))
      }
    }
    setPage(pageParam)
  }, [searchParams, totalPages])

  useEffect(() => {
    // Navigating to first page when input changes
    if (searchTerm) {
      router.push(handleSearchParams({ page: 1, searchTerm }))
    }
  }, [searchTerm])

  return {
    page,
    totalPages,
    searchTerm,
  }
}

export default usePagination
