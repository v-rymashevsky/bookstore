import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from '../components/spinner'
import { RootState, useAppDispatch } from '../redux/store'
import { useSelector } from 'react-redux'
import { fetchBook } from '../redux/book-item-slice'
import { Title } from '../components/title'

export function BookDetails () {
  const { isbn13 } = useParams()
  const dispatch = useAppDispatch()

  const bookItem = useSelector((state: RootState) => state.bookItem.content)
  const loading = useSelector((state: RootState) => state.bookItem.isLoading)
  const error = useSelector((state: RootState) => state.bookItem.error)

  useEffect(() => {
    if (isbn13) {
      dispatch(fetchBook(isbn13))
    }
  }, [isbn13, dispatch])

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!bookItem) {
    return <div>No book data found.</div>
  }

  console.log(bookItem)
  return (
    <>
      <Title>{bookItem.title}</Title>
      <div className="card mb-3 border-0">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={bookItem.image} className="img-fluid rounded-start" alt="book-cover-imag" />
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
              <div className="d-flex flex-column">
                <a className="mb-2" href={bookItem.pdf['Chapter 2']} target="_blank" rel="noopener noreferrer">Book Preview</a>
                <a href="#" className="btn btn-primary" style={{ width: '30%' }}>Add to cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
