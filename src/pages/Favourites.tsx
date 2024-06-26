import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../components/card'
import { Title } from '../components/title'
import { RootState } from '../redux/store'
import { Book } from '../interfaces/book'

export const Favourites: React.FC = () => {
  const favouriteBooks = useSelector((state: RootState) => state.books.favourites)
  const renderFavourites = () => {
    if (!favouriteBooks.length) return 'nothing to display'
    return favouriteBooks.map((book: Book) => (
      <Card key={book.id} book={book} />
    ))
  }

  return (
    <>
      <Title>Favourites ({favouriteBooks.length})</Title>
      <div className="d-flex flex-wrap gap-2 mb-3">
        {renderFavourites()}
      </div>
    </>
  )
}
