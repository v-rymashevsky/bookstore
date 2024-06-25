import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from '../components/spinner'
import { RootState, useAppDispatch } from '../redux/store'
import { useSelector } from 'react-redux'
import { BookItem, fetchBook } from '../redux/book-item-slice'
import { Title } from '../components/title'
import { ShoppingCartButton } from '../components/shopping-cart-button'
import { updateItems } from '../redux/shopping-cart-slice'

export const BookDetails: React.FC = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const bookItem = useSelector((state: RootState) => state.bookItem.content)
  const loading = useSelector((state: RootState) => state.bookItem.isLoading)
  const error = useSelector((state: RootState) => state.bookItem.error)

  useEffect(() => {
    if (id) {
      dispatch(fetchBook(id))
    }
  }, [id, dispatch])

  function addToCart (book: BookItem) {
    const shoppingCart: BookItem[] = JSON.parse(localStorage.getItem('shopping-cart') || '[]')
    const index = shoppingCart.findIndex(cartItem => cartItem.isbn13 === book.isbn13)
    if (index !== -1) {
      shoppingCart.splice(index, 1)
    } else {
      shoppingCart.push({ ...book, quantity: 1 })
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    dispatch(updateItems(shoppingCart))
  }

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!bookItem) {
    return <div>No book data found.</div>
  }

  return (
    <>
      <Title>{bookItem.title}</Title>
      <div className="card mb-3 border-0">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={bookItem.image} className="img-fluid rounded-start" alt="book-cover-image" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className='d-flex flex justify-content-between mb-2'>
                <h5 className="card-title">{bookItem.price}</h5>
                <h5 className="card-title"><i className="bi bi-star" style={{ fontSize: '1rem' }}></i> {bookItem.rating} / 5</h5>
              </div>
              <div className='d-flex flex justify-content-between'>
                <strong>Authors</strong>
                <p>{bookItem.authors}</p>
              </div>
              <div className='d-flex flex justify-content-between'>
                <strong>Publisher</strong>
                <p>{bookItem.publisher}</p>
              </div>
              <div className='d-flex flex justify-content-between'>
                <strong>Language</strong>
                <p>{bookItem.language}</p>
              </div>
              <div className="d-flex flex justify-content-between">
                <strong>Pages</strong>
                <p>{bookItem.pages}</p>
              </div>
              <div className='d-flex flex justify-content-between'>
                <strong>Year</strong>
                <p>{bookItem.year}</p>
              </div>
              <div>
                <strong>Description</strong>
                <p>{bookItem.desc}</p>
              </div>
              {bookItem.pdf && (
                <div className="d-flex flex-column mb-3">
                  <strong>Book Preview</strong>
                  {Object.keys(bookItem.pdf).map((key) => (
                    <small key={key}><a className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href={bookItem.pdf[key]} target="_blank" rel="noopener noreferrer">
                      {key}
                    </a></small>
                  ))}
                </div>
              )}
              <ShoppingCartButton book={bookItem} onAddToCart={addToCart} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
