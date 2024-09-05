import { ProductProps } from '@src/types/productProps'

type FilterProductsProps = {
  items: ProductProps[]
  filterTerm: string
  isActive: boolean
  isPromotion: boolean
}

const filterProducts = ({
  items,
  filterTerm,
  isActive,
  isPromotion,
}: FilterProductsProps) => {
  return items.filter((item) => {
    const matchesSearchTerm = item.name
      .toLowerCase()
      .includes(filterTerm.toLowerCase())

    const matchesActiveStatus = isActive ? item.active : true

    const matchesPromoStatus = isPromotion ? item.promotion : true

    return matchesSearchTerm && matchesActiveStatus && matchesPromoStatus
  })
}

export default filterProducts
