import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../redux/store'
import { Book, fetchBooks } from '../redux/books-slice'
import { Card } from '../components/card'
import { Title } from '../components/title'

export const NewBookReleases: React.FC = () => {
  const dispatch = useAppDispatch()
  const books = useSelector((state: RootState) => state.books.list)
  const error = useSelector((state: RootState) => state.books.error)
  const isLoading = useSelector((state: RootState) => state.books.isLoading)

  useEffect(() => {
    if (books.length === 0) {
      dispatch(fetchBooks())
    }
  }, [dispatch, books.length])

  function renderBooks () {
    if (isLoading) {
      return <div className="spinner-border" style={{ position: 'absolute', top: '50%', left: '50%' }} role="status"></div>
    }
    if (error) {
      return <div className="alert alert-danger">{error}</div>
    }

    return books.map((book: Book) => (
      <Card
        key={book.isbn13}
        title={book.title}
        subtitle={book.subtitle || 'No description provided'}
        image={book.image}
        price={book.price || 'Price not available'}
      />
    ))
  }

  return (
    <>
      <Title>New Book Releases</Title>
      <div className="d-flex flex-wrap gap-2 mb-3">
        {renderBooks()}
      </div>
    </>
  )
}
