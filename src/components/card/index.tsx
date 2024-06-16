import React, { useState, useEffect } from 'react'
import { Book } from '../../redux/books-slice'

export const Card: React.FC<{ book: Book }> = ({ book }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const favoriteBooks: Book[] = JSON.parse(localStorage.getItem('favoriteBooks') || '[]')
    const isBookFavorite = favoriteBooks.some((favBook: Book) => favBook.isbn13 === book.isbn13)
    setIsFavorite(isBookFavorite)
  }, [book.isbn13])

  function toggleFavorite (book: Book) {
    const favoriteBooks: Book[] = JSON.parse(localStorage.getItem('favoriteBooks') || '[]')
    const index = favoriteBooks.findIndex(favBook => favBook.isbn13 === book.isbn13)
    if (index !== -1) {
      favoriteBooks.splice(index, 1)
    } else {
      favoriteBooks.push(book)
    }
    localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks))
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="card rounded-0" style={{ width: '18rem' }}>
      <img
        src={book.image}
        className="card-img-top"
        style={{ height: '18rem' }}
        alt="post image"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{ textTransform: 'uppercase' }}>{book.title}</h5>
        <p className="card-text">
          {book.subtitle}
        </p>
        <div className="d-flex justify-content-between mt-auto">
          <p className="card-text mb-0">{book.price}</p>
          <i className={isFavorite ? 'bi bi-heart-fill' : 'bi bi-heart'} style={{
            cursor: 'pointer'
          }} onClick={() => toggleFavorite(book)}></i>
        </div>
      </div>
    </div>
  )
}
