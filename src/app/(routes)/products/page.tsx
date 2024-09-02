import productsData from '@src/features/products/productsData'
import React from 'react'

const Products = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const productsPerPage = 5
  const page = searchParams ? searchParams['page'] : '1'

  const start = (Number(page) - 1) * productsPerPage
  const end = start + productsPerPage

  const entries = productsData.slice(start, end)

  return (
    <div>
      {entries.map((entry) => {
        return <div key={entry.id}>{entry.name}</div>
      })}
    </div>
  )
}

export default Products
