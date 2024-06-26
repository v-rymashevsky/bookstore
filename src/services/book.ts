import { client } from '../api/client'
import { booksEndpoint } from '../api/endpoints'
import { Book, SearchParams } from '../redux/books-slice'

async function requestBooks (params = {}) {
  const { data } = await client.get(booksEndpoint, { params })
  return data.books.map((book: Book) => ({
    ...book,
    id: book.isbn13
  }))
}

async function requestSearchResults ({ search, page }: SearchParams) {
  const { data } = await client.get(`/search/${search}/${page}`)
  return data
}

async function requestBookDetails (id: string) {
  const { data } = await client.get(`/books/${id}`)
  return data
}
export { requestBooks, requestBookDetails, requestSearchResults }
