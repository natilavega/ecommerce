import { useEffect, useState } from 'react'

export function useCategories ( products ) {
  const [ categoriesList, setCategoriesList ] = useState( [] )

  useEffect( () => {
    if ( !products ) return
      
    getUniqueCategories( { products } )
  }, [] )
  
  const getUniqueCategories = () => {
    const uniqueCategories = []

    products.forEach( product => {
      if (!uniqueCategories.includes(product.category)) {
        uniqueCategories.push(product.category)
      }
    } )
    
    uniqueCategories.sort((a, b) => a.localeCompare(b))
    setCategoriesList(uniqueCategories)
  }

  return { categoriesList }
}
