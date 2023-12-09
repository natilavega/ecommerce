import { useCart } from '../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import '../styles/Products.css'

export function Products({ products }) {
  const { cart, addToCart, removeFromCart } = useCart()

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />
              <div>
                <h3>{product.title}</h3>${product.price}
              </div>
              <div>
                <button
                  onClick={() =>
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }
                  className={ isProductInCart ? 'secondary' : 'primary' }
                >
                  { isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon /> }
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
