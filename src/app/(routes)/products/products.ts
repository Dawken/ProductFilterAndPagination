import {
  productsData,
  productsPerPage,
} from '@src/features/products/productsData'
import { Props } from './products.types'
import filterProducts from '@src/utils/filterProducts'

const products = ({ searchParams }: Props) => {
  const page = searchParams['page'] ?? '1'
  const searchTerm = searchParams['search'] ?? ''
  const isActive = Boolean(searchParams['active'])
  const isPromotion = Boolean(searchParams['promotion'])

  const start = (Number(page) - 1) * productsPerPage
  const end = start + productsPerPage

  const searchedProducts = filterProducts({
    items: productsData,
    filterTerm: searchTerm,
    isActive,
    isPromotion,
  }).sort((a, b) => {
    if (a.name.toLowerCase().startsWith(searchTerm.toLowerCase())) return -1
    if (b.name.toLowerCase().startsWith(searchTerm.toLowerCase())) return 1
    return 0
  })

  const filteredProducts = searchedProducts.slice(start, end)
  return {
    filteredProducts,
  }
}

export default products
