import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = ( products ) => {
    const sortedProducts = sortProducts(products)

    return sortedProducts.filter(product => {
      return (
        product.price >= filters.minPrice && (
          filters.category === 'all' || product.category === filters.category
        )
      )
    })
  }

  const sortProducts = (products) => {
    return [...products].sort((a, b) => a.title.localeCompare(b.title))
  }

  return { filters, filterProducts, setFilters }
}
