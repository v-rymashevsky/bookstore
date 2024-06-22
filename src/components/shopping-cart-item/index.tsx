import React from 'react'
import { BookItem } from '../../redux/book-item-slice'

export const ShoppingCartItem: React.FC<{ book: BookItem, onRemove: (book: BookItem) => void }> = ({ book, onRemove }) => {
  console.log('render')
  return (
            <div className="card mb-3 border-0">
                <div className="row flex-nowrap g-0">
                    <div className="col-md-4">
                        <img src={book.image} className="img-fluid rounded-start" alt="book-cover-image" />
                    </div>
                    <div className="col-md-8" style={{ width: '33.3%' }}>
                        <div className="card-body">
                            <h5 className="card-title">{book.title}</h5>
                            <p className="card-title">by {book.authors}</p>
                            <div
                                className="d-flex flex-column"
                                style={{ gap: '.5rem' }}>
                                <div
                                    className="d-flex align-items-center"
                                    style={{ gap: '.5rem' }}>
                                    <button onClick={() => onIncreaseQuantity(book)}>-</button>
                                    <div>{book.quantity}</div>
                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between" style={{ width: '10%' }}>
                        <p className="mb-0">{book.price}</p>
                        <i className="bi bi-x" style={{ cursor: 'pointer' }} onClick={() => onRemove(book)}></i>
                    </div>
                </div>
            </div>
  )
}
