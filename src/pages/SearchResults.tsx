import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Title } from '../components/title'
import { RootState, useAppDispatch } from '../redux/store'
import { fetchSearchResults } from '../redux/books-slice'
import { Spinner } from '../components/spinner'
import { Card } from '../components/card'
import { Pagination } from '../components/pagination'
import { Book } from '../interfaces/book'

export const SearchResults: React.FC = () => {
  const dispatch = useAppDispatch()
  const { query } = useParams()
  const { page } = useParams()
  const books = useSelector((state: RootState) => state.books.list)
  const error = useSelector((state: RootState) => state.books.error)
  const isLoading = useSelector((state: RootState) => state.books.isLoading)
  const pagesCount = useSelector((state: RootState) => state.books.pagesCount)
  const total = useSelector((state: RootState) => state.books.total)

  useEffect(() => {
    dispatch(fetchSearchResults({ search: query, page: page || '1' }))
  }, [query, page, dispatch])

  function renderBooks () {
    if (isLoading) {
      return <Spinner />
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
      <Title>Found {total} results for &quot;{query !== undefined ? query.split('').map(char => char === '+' ? ' ' : char).join('') : ''}&quot;</Title>
      {books.length
        ? (
        <>
          <Pagination pagesCount={pagesCount} currentPage={Number(page)} to={`search/${query}/`} />
          <div className="d-flex flex-wrap gap-2 mb-3">
            {renderBooks()}
          </div>
        </>
          )
        : 'Try looking for something else'}
    </>
  )
}
