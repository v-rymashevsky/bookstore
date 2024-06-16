import React from 'react'
import { Book } from '../redux/books-slice'
import { Card } from '../components/card'
import { Title } from '../components/title'

export const Favourites: React.FC = () => {
  const favourites = JSON.parse(localStorage.getItem('favoriteBooks') || '[]')

  function renderFavourites () {
    if (!favourites.length) return 'nothing to display'
    return favourites.map((book: Book) => (
      <Card
      key={book.isbn13}
      book={book}
      />
    ))
  }

  return (
    <>
      <Title>Favourites</Title>
      <div className="d-flex flex-wrap gap-2 mb-3">
        {renderFavourites()}
      </div>
    </>
  )
}
