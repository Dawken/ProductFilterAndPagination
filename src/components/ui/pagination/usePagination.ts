import { useMemo } from 'react'
import { HookProps } from './pagination.types'

const usePagination = ({ totalPages, currentPage }: HookProps) => {
  const range = (start: number, end: number) => {
    const length = end - start + 1
    return Array.from({ length }, (_, idx) => idx + start)
  }

  const paginationRange = useMemo(() => {
    const itemCount = 5

    // when total pages are lower than 6, we are return all pages
    if (totalPages <= itemCount + 1) {
      return range(1, totalPages)
    }

    const leftSiblingIndex = Math.max(currentPage - 1, 1)
    const rightSiblingIndex = Math.min(currentPage + 1, totalPages)

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPages

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange = range(1, itemCount)
      return [...leftRange, '...', totalPages]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightRange = range(totalPages - itemCount + 1, totalPages)
      return [firstPageIndex, '...', ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex]
    }

    // Dodajemy przypadek domyślny, aby upewnić się, że zawsze zwracamy tablicę
    return range(1, totalPages)
  }, [totalPages, currentPage])

  return { paginationRange }
}

export default usePagination
