import React, { useEffect } from 'react'
import { updateItems } from '../../redux/shopping-cart-slice'
import { RootState, useAppDispatch } from '../../redux/store'
import { useSelector } from 'react-redux'
import { QuantityControlsProps } from '../../interfaces/quantity-controls-props'
import { BookDetailsItem } from '../../interfaces/book-details-item'

export const QuantityControls: React.FC<QuantityControlsProps> = ({ book }) => {
  const dispatch = useAppDispatch()
  const shoppingCart = useSelector((state: RootState) => state.cart.items)

  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
  }, [shoppingCart])

  function increaseQuantity (book: BookDetailsItem) {
    dispatch(updateItems(shoppingCart.map((cartItem: BookDetailsItem) =>
      cartItem.isbn13 === book.isbn13
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )))
  }

  function decreaseQuantity (book: BookDetailsItem) {
    dispatch(updateItems(shoppingCart.map((cartItem: BookDetailsItem) =>
      cartItem.isbn13 === book.isbn13
        ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 1) }
        : cartItem
    )))
  }

  return (
      <div className="d-flex align-items-center" style={{ gap: '.5rem' }}>
        <i className="bi bi-dash" style={{ fontSize: '1.3rem', cursor: 'pointer' }} onClick={() => decreaseQuantity(book)}></i>
        <span>{book.quantity}</span>
        <i className="bi bi-plus" style={{ fontSize: '1.3rem', cursor: 'pointer' }} onClick={() => increaseQuantity(book)}></i>
      </div>
  )
}
