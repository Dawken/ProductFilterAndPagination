import { ProductProps } from '@src/types/productProps'

type FilterProductsProps = {
  items: ProductProps[]
  filterTerm: string
}

const filterProducts = ({ items, filterTerm }: FilterProductsProps) => {
  return items.filter((item) =>
    item.name.toLowerCase().includes(filterTerm.toLowerCase())
  )
}
export default filterProducts
