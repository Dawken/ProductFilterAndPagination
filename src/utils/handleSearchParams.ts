const handleSearchParams = ({
  page,
  searchTerm,
}: {
  page: number
  searchTerm?: string
}) => {
  return `/products?page=${page}${
    searchTerm ? `&search=${encodeURIComponent(searchTerm)}` : ''
  }`
}
export default handleSearchParams
