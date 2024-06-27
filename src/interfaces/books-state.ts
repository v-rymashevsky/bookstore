import { Book } from './book'

export interface BooksState {
    list: Book[]
    favourites: Book []
    isLoading: boolean
    error: string | null
    total: string
    pagesCount: number
  }
