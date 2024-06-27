import React from 'react'
import { BookDetails } from '../../interfaces/book-details'
import { QuantityControls } from '../quantity-controls'
import { RootState, useAppDispatch } from '../../redux/store'
import { updateItems } from '../../redux/shopping-cart-slice'
import { useSelector } from 'react-redux'
import { ShoppingCartItemProps } from '../../interfaces/shopping-cart-item-props'

export const ShoppingCartItem: React.FC<ShoppingCartItemProps> = ({ book }) => {
  const dispatch = useAppDispatch()
  const shoppingCart = useSelector((state: RootState) => state.cart.items)

  function removeItem (book: BookDetails) {
    const filteredCart = shoppingCart.filter((cartItem: BookDetails) => cartItem.isbn13 !== book.isbn13)
    localStorage.setItem('shopping-cart', JSON.stringify(filteredCart))
    dispatch(updateItems(filteredCart))
  }

  return (
            <div className="card mb-3 border-0" style={{ width: '80%' }}>
                <div className="row flex-nowrap g-0">
                    <div className="col-md-4">
                        <img src={book.image} className="img-fluid rounded-start" alt="book-cover-image" />
                    </div>
                    <div className="col-md-8 d-flex align-items-center" style={{ width: '33.3%' }}>
                        <div className="card-body">
                            <h5 className="card-title" style={{ fontFamily: 'Bebas Neue', fontSize: '1.5rem' }}>{book.title}</h5>
                            <p className="card-title" style={{ color: 'grey' }}>by <small>{book.authors}</small></p>
                            <div
                                className="d-flex flex-column"
                                style={{ gap: '.5rem' }}>
                              <QuantityControls book={book} />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between" style={{ width: '10%' }}>
                        <p className="mb-0" style={{ fontFamily: 'Bebas Neue', fontSize: '2rem' }}>{book.price}</p>
                        <i className="bi bi-x-lg" style={{ cursor: 'pointer' }} onClick={() => removeItem(book)}></i>
                    </div>
                </div>
            </div>
  )
}
