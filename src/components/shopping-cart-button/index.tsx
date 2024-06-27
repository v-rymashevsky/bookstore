import React, { useEffect, useState } from 'react'
import { BookDetailsItem } from '../../interfaces/book-details-item'
import { ShoppingCartButtonProps } from '../../interfaces/shopping-cart-button-props'

export const ShoppingCartButton: React.FC<ShoppingCartButtonProps> = ({ book, onAddToCart }) => {
  const [isInCart, setIsInCart] = useState<boolean>(false)

  useEffect(() => {
    const shoppingCart = JSON.parse(localStorage.getItem('shopping-cart') || '[]')
    const found = shoppingCart.some((item: BookDetailsItem) => item.isbn13 === book.isbn13)
    setIsInCart(found)
  }, [book])

  const addToCart = () => {
    onAddToCart(book)
    setIsInCart(!isInCart)
  }

  return (
      <button className="btn btn-dark" style={{ width: '30%' }} onClick={addToCart}>
        {isInCart ? 'Remove from cart' : 'Add to cart'}
      </button>
  )
}
