import { CartProvider } from './context/cart'
import { useFilters } from './hooks/useFilters'
import { Header } from './components/Header'
import { Cart } from './components/Cart'
import { Products } from './components/Products'
import { Footer } from './components/Footer'
import { products as initialProducts } from './mocks/products.json'
import { IS_DEVELOPMENT } from './config'

function App() {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer /> }
    </CartProvider>
  )
}

export default App
