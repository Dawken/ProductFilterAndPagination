import {
  productsData,
  productsPerPage,
} from '@src/features/products/productsData'
import { Props } from './products.types'
import filterItems from '@src/utils/filterItems'

const useProducts = ({ searchParams }: Props) => {
  const page = searchParams['page'] ?? '1'
  const searchTerm = searchParams['search'] ?? ''

  const start = (Number(page) - 1) * productsPerPage
  const end = start + productsPerPage

  const filteredProducts = filterItems({
    items: productsData,
    filterTerm: searchTerm,
  }).sort((a, b) => {
    if (a.name.toLowerCase().startsWith(searchTerm.toLowerCase())) return -1
    if (b.name.toLowerCase().startsWith(searchTerm.toLowerCase())) return 1
    return 0
  })

  const entries = filteredProducts.slice(start, end)
  return {
    entries,
  }
}

export default useProducts
