import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Title } from '../components/title'
// import { Pagination } from '../components/pagination'
import { Book, fetchSearchResults } from '../redux/books-slice'
import { Spinner } from '../components/spinner'
import { Card } from '../components/card'
import { RootState, useAppDispatch } from '../redux/store'

export const SearchResults: React.FC = () => {
  const dispatch = useAppDispatch()
  const { query } = useParams()
  const { page: currentPage } = useParams()
  const books = useSelector((state: RootState) => state.books.list)
  const error = useSelector((state: RootState) => state.books.error)
  const isLoading = useSelector((state: RootState) => state.books.isLoading)

  useEffect(() => {
    dispatch(fetchSearchResults(query))
  }, [query, currentPage, dispatch])

  function renderBooks () {
    if (isLoading) {
      return <Spinner />
    }
    if (error) {
      return <div className="alert alert-danger">{error}</div>
    }

    return books.map((book: Book) => (
            <Card
                key={book.isbn13}
                book={book}
            />
    ))
  }

  return (
        <>
            <Title>Search results for  &quot;{query}&quot;</Title>
            <div className="d-flex flex-wrap gap-2 mb-3">
                {renderBooks()}
            </div>
        </>
  )
}
