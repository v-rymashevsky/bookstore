import React from 'react'
import { useSelector } from 'react-redux'
import { Title } from '../components/title'
import { ShoppingCartItem } from '../components/shopping-cart-item'
import { RootState } from '../redux/store'
import { TotalValue } from '../components/total-value'
import { BookDetails } from '../interfaces/book-details'

export const ShoppingCart: React.FC = () => {
  const shoppingCart = useSelector((state: RootState) => state.cart.items)
  function renderShoppingCart () {
    if (!shoppingCart.length) return 'Your cart is empty!'
    return shoppingCart.map((book: BookDetails) => (
      <ShoppingCartItem
       key={book.id}
       book={book}
      />
    ))
  }

  return (
    <>
      <Title>Shopping Cart</Title>
      {renderShoppingCart()}
      <div style={{ textAlign: 'end' }}>
      {shoppingCart.length ? <TotalValue /> : null}
      {shoppingCart.length
        ? (
  <button className="btn btn-dark mb-3" style={{ width: '11%' }}>Check out</button>
          )
        : null}
        </div>
    </>
  )
}
