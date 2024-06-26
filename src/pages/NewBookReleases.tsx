import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../redux/store'
import { fetchBooks } from '../redux/books-slice'
import { Card } from '../components/card'
import { Title } from '../components/title'
import { Spinner } from '../components/spinner'
import { Book } from '../interfaces/book'

export const NewBookReleases: React.FC = () => {
  const dispatch = useAppDispatch()
  const books = useSelector((state: RootState) => state.books.list)
  const error = useSelector((state: RootState) => state.books.error)
  const isLoading = useSelector((state: RootState) => state.books.isLoading)

  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch])

  function renderBooks () {
    if (isLoading) {
      return <Spinner/>
    }
    if (error) {
      return <div className="alert alert-danger">{error}</div>
    }

    return books.map((book: Book) => (
      <Card
      key={book.id}
      book={book}
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
