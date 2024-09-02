type FilterItemsProps = {
  items: {
    name: string
    id?: string
  }[]
  filterTerm: string
}

const filterItems = ({ items, filterTerm }: FilterItemsProps) => {
  return items.filter((item) =>
    item.name.toLowerCase().includes(filterTerm.toLowerCase())
  )
}
export default filterItems
