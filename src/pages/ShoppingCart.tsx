import React from 'react'
import { Title } from '../components/title'
import { ShoppingCartItem } from '../components/shopping-cart-item'
import { BookItem } from '../redux/book-item-slice'
import { RootState } from '../redux/store'
import { TotalValue } from '../components/total-value'
import { useSelector } from 'react-redux'

export const ShoppingCart: React.FC = () => {
  const shoppingCart = useSelector((state: RootState) => state.cart.items)

  function renderShoppingCart () {
    if (!shoppingCart.length) return 'Your cart is empty!'
    return shoppingCart.map((book: BookItem) => (
      <ShoppingCartItem
       key={book.isbn13}
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
