import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'
import '../styles/Filters.css'

export function Filters ( { categories } ) {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de</label>
        <input type="range" id={minPriceFilterId} min='0' max='4000' onChange={handleChangeMinPrice} value={filters.minPrice} />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todo</option>
          { categories.map( category => (
            <option key={ category } value={ category }>{ category }</option>
          ))}
        </select>
      </div>
    </section>
  )
}
